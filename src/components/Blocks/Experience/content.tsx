import { ExperienceBlockContentProps } from './types'
import Md from '../../Md'
import { BlockList } from '../styled'
import { CompanyDescription } from './styled'
import { useResumeCxt } from '../../../context/resume.context'

const ExperienceBlockContent = (
  props: ExperienceBlockContentProps
): JSX.Element => {
  const {
    state: { liteModeOn }
  } = useResumeCxt()

  return (
    <>
      {!liteModeOn && (
        <Md
          source={props.description}
          renderers={{ paragraph: CompanyDescription }}
        />
      )}
      <Md source={props.duties} renderers={{ list: BlockList }} />
    </>
  )
}

export default ExperienceBlockContent
