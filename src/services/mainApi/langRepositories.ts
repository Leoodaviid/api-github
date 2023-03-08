import { RespositoriesProps } from '../../models/models'
import { languageColors } from '../../components/Helper/langColors'

export const getLangsFrom = (repositories: RespositoriesProps[]) => {
  const languageCounts: { [key: string]: number } = {}
  repositories.forEach((language) => {
    if (languageCounts[language.language]) {
      languageCounts[language.language] += 1
    } else {
      languageCounts[language.language] = 1
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
