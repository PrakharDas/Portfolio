import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

function SiteLoader({ visible }) {
  return <AnimatePresence>{visible ? <LoadingScreen /> : null}</AnimatePresence>
}

export default SiteLoader
