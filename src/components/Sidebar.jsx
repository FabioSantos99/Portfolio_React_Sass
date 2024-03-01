import Avatar from "../img/perfil.jpeg";

import '../styles/components/sidebar.sass';

import InformationContainer from "./InformationContainer";

import SocialNetworkContainer from "./SocialNetworkContainer";

const Sidebar = () => {
  return <aside id='sidebar'>
      <img src={Avatar} alt="Fabio Santos" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <p>Informações de contato</p>
      <a href="" className='btn'>Donwload currículo</a>

  </aside>;
}

export default Sidebar;