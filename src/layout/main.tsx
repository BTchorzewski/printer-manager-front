import { Sidebar } from '../components/Sidebar/Sidebar';
interface Props {
  children: React.ReactNode,
}
export const Main = (props:Props) => {
  return (
    <div className='Main' >
      <Sidebar/>
    </div>
  )
}