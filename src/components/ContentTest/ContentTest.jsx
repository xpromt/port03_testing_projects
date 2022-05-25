import Box from "../Box/Box";
import Click from "../Click/Click";
import RComponent from "../RComponent/RComponent";

const ContentTest = ({name}) => {
  switch (name) {
    case 'box':
      return <Box />
    
    case 'Click':
      return <Click />
  
    case 'RComponent':
      return <RComponent />
  
    default:
      return <Box />
  }
}

export default ContentTest;