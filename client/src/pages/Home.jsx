import Clients from '../components/Clients';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';
import Projects from '../components/Projects';
export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
      <AddClientModal />
      <AddProjectModal />
      </div>
      <hr />
      <Projects/>
      <Clients />
      
    </>
  );
}