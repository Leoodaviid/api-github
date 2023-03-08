import { RespositoriesProps } from '../../models/models'
import { languageColors } from '../../components/Helper/langColors'

export const getLangsFrom = (repositories: RespositoriesProps[]) => {
  const languageCounts: { [key: string]: number } = {}
  repositories.forEach((repo) => {
    const language = repo.language
    if (!language) {
      return // pula esta interação se a language for null
    }
    if (languageCounts[language]) {
      languageCounts[language] += 1
    } else {
      languageCounts[language] = 1
    }
  })
  const languageData = Object.keys(languageCounts)
    .map((language) => ({
      name: language,
      count: languageCounts[language],
      color: languageColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count)

  return languageData
}
