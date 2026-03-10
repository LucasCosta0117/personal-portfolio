<template>
  <v-card class="github-stats-card pa-4" theme="dark" variant="outlined">
    <v-row>
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-4">
          <v-icon start color="amber">mdi-code-tags</v-icon>
          {{ $t('GithubStats.topLangs') }}
        </h3>
        
        <div v-if="loading" class="d-flex justify-center pa-5">
          <v-progress-circular indeterminate color="amber"></v-progress-circular>
        </div>

        <v-list v-else bg-color="transparent">
          <v-list-item v-for="(lang, index) in topLanguages" :key="index" class="px-0">
            <template v-slot:prepend>
              <v-chip size="small" color="amber" variant="outlined" class="mr-2">
                {{ lang.percentage }}%
              </v-chip>
            </template>
            <v-list-item-title class="text-caption">{{ lang.name }}</v-list-item-title>
            <v-progress-linear
              :model-value="lang.percentage"
              color="amber"
              height="4"
              rounded
            ></v-progress-linear>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-4">
          <v-icon start color="amber">mdi-star-outline</v-icon>
          {{ $t('GithubStats.featuredProjects') }}
        </h3>

        <div v-if="loading" class="d-flex justify-center pa-5">
          <v-progress-circular indeterminate color="amber"></v-progress-circular>
        </div>

        <v-list v-else bg-color="transparent">
          <v-list-item v-if="featuredProjects.length === 0">
            <v-list-item-title class="text-caption italic">
              {{ $t('GithubStats.noFeaturedProjects') }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            v-for="repo in featuredProjects"
            :key="repo.id"
            :href="repo.html_url"
            target="_blank"
            link
            class="repo-item mb-2"
          >
            <template v-slot:append>
              <div class="d-flex align-center">
                <span class="text-caption mr-1">{{ repo.stargazers_count }}</span>
                <v-icon size="small" color="amber">mdi-star</v-icon>
              </div>
            </template>
            <v-list-item-title class="text-amber font-weight-bold text-body-2">
              {{ repo.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption text-truncate">
              {{ repo.description || $t('GithubStats.noDescription') }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'GithubStats',
  data() {
    return {
      loading: true,
      topLanguages: [],
      featuredProjects: []
    }
  },
  mounted() {
    this.fetchGithubData();
  },
  methods: {
    async fetchGithubData() {
      try {
        const username = 'lucascosta0117';
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=50&sort=updated`);
        
        if (!response.ok) throw new Error('Falha ao carregar dados');
        
        const data = await response.json();
        
        // FILTRO: Apenas os que têm pelo menos 1 star, pegando os 3 mais recentes
        this.featuredProjects = data
          .filter(repo => repo.stargazers_count > 0)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 3);

        this.calculateLanguages(data);
        
      } catch (error) {
        console.error("Erro GitHub API:", error);
      } finally {
        this.loading = false;
      }
    },
    calculateLanguages(repos) {
      const langCounts = {};
      let total = 0;

      repos.forEach(repo => {
        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          total++;
        }
      });

      this.topLanguages = Object.entries(langCounts)
        .map(([name, count]) => ({
          name,
          percentage: Math.round((count / total) * 100)
        }))
        .sort((a, b) => b.percentage - a.percentage)
        .slice(0, 3);
    }
  }
}
</script>

<style scoped>
.github-stats-card {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 191, 0, 0.3) !important;
  border-radius: 12px;
}
.repo-item {
  border-left: 3px solid goldenrod;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.2s;
}
.repo-item:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.08);
}
</style>