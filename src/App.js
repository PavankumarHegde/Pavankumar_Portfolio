import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet'




const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">
      <div className="theme-switcher">
        <h3 onClick={toggleTheme}>Click To Toggle Dark/Light Theme</h3>
      </div>

      <div className="home-container">
      <Helmet>
        <title>Home - exported project</title>
        <meta property="og:title" content="Home - exported project" />
      </Helmet>
      <div className="home-light-mode">
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/dd40bd95-bcfb-4cf3-b50a-16ef643ad020?org_if_sml=14010"
          alt="Rectangle4615"
          className="home-rectangle46"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/0fe4964b-9e5d-49d9-927f-cfb9ead0cfd2?org_if_sml=14010"
          alt="Rectangle4216"
          className="home-rectangle42"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/191f3092-5d46-459e-849c-2740b844babc?org_if_sml=14010"
          alt="Rectangle4317"
          className="home-rectangle43"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/ca8c571a-c3df-4244-b8aa-43bac830c691?org_if_sml=14010"
          alt="Rectangle4118"
          className="home-rectangle41"
        />
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/3ce2436c-41b9-4933-8507-23584e5869b7?org_if_sml=14010"
          alt="Rectangle4419"
          className="home-rectangle44"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/4f57c5dd-89c9-4646-a20e-8f6642f72126?org_if_sml=14010"
          alt="Rectangle40110"
          className="home-rectangle40"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/282d1c7f-9b50-483f-a145-d586322c069d?org_if_sml=14010"
          alt="Rectangle45111"
          className="home-rectangle45"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/499e1309-b5f5-477e-bad9-e261431becc3?org_if_sml=1381"
          alt="Rectangle38112"
          className="home-rectangle38"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/398011c9-961c-4542-96c7-acd8b0465d0a?org_if_sml=1381"
          alt="Rectangle37113"
          className="home-rectangle37"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/59658d70-4628-486c-9999-923f6de63b5a?org_if_sml=18858"
          alt="Rectangle26114"
          className="home-rectangle26"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/4e89534c-d1ce-481e-93d9-812c85eaaf4d?org_if_sml=123428"
          alt="Rectangle35115"
          className="home-rectangle35"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/fb6d051c-8aea-46c2-990d-61ea26112568?org_if_sml=123692"
          alt="Rectangle36116"
          className="home-rectangle36"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/f8216e32-46c1-4d4a-9de3-8c53056db372?org_if_sml=1419"
          alt="Rectangle47117"
          className="home-rectangle47"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/26d54d7b-7cbc-4605-bfff-fd56512e29f7?org_if_sml=1414"
          alt="Rectangle25118"
          className="home-rectangle25"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/a3c1bf18-05b7-4c7d-bad7-eb819f71c859?org_if_sml=1441"
          alt="Rectangle23119"
          className="home-rectangle23"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/13391303-fc75-41d0-9b7a-7cf3c25c50af?org_if_sml=1437"
          alt="Rectangle24120"
          className="home-rectangle24"
        />
        <img
          src="/profile-300w.png"
          alt="Ellipse1121"
          className="home-ellipse1"
        />
        <span className="home-text">Pavankumar Hegde</span>
        <span className="home-text01">Developer</span>
        <span className="home-text02">
          I am highly driven and strive for independence in my life. My focus
          lies in building Android and web-related projects, leveraging my
          skills to create innovative solutions. Alongside my academic pursuits,
          I enjoy playing chess, badminton, reading books, and developing
          Android apps. With a strong determination and a diverse skill set, I
          am ready to take on new challenges and make a meaningful contribution
          in the field of computer science and engineering.
        </span>
        <img
          src="/external/line1125-ve3.svg"
          alt="Line1125"
          className="home-line1"
        />
        <span className="home-text03">
          <span>Contact</span>
        </span>
        <span className="home-text05">
          <span>Email</span>
        </span>
        <span className="home-text07">
          <span>LinkedIn</span>
        </span>
        <span className="home-text09">
          <span>GitHub</span>
        </span>
        <span className="home-text11">
          <span>Experience</span>
        </span>
        <span className="home-text13">
          <span>Skills</span>
        </span>
        <span className="home-text15">
          <span>Hobbies</span>
        </span>
        <span className="home-text17">
          <span>Language</span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/80a5c35c-b56d-4617-80d5-6c6d7034f8ba?org_if_sml=1394"
          alt="Rectangle15134"
          className="home-rectangle15"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/ec7c17ff-952f-4034-b7da-bdf9d9425ef3?org_if_sml=1394"
          alt="Rectangle16135"
          className="home-rectangle16"
        />
        <span className="home-text19">
          <span>Cricket</span>
        </span>
        <span className="home-text21">
          <span>English</span>
        </span>
        <span className="home-text23">
          <span>Cricket</span>
        </span>
        <span className="home-text25">
          <span>Kannada</span>
        </span>
        <span className="home-text27">
          <span>
            <span>2013-2017</span>
            <br></br>
            <span>Job Position</span>
          </span>
        </span>
        <span className="home-text32">
          <span>
            <span>2017-2019</span>
            <br></br>
            <span>Job Position</span>
          </span>
        </span>
        <span className="home-text37">
          <span>
            <span>2019-Present</span>
            <br></br>
            <span>Job Position</span>
          </span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/382e83e5-96a4-4b6a-abe3-82f2c893c47c?org_if_sml=1197"
          alt="Ellipse2143"
          className="home-ellipse2"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/df0596ea-5e56-44f7-ae01-7c7fca26994f?org_if_sml=194"
          alt="Ellipse5144"
          className="home-ellipse5"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/f50ab288-4954-4e1c-9bd4-1fcc390d4ad0?org_if_sml=1217"
          alt="Ellipse3145"
          className="home-ellipse3"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/8790c674-1d4f-4f58-b136-e42fb1c47b91?org_if_sml=1217"
          alt="Ellipse4146"
          className="home-ellipse4"
        />
        <img
          src="/external/line2147-jsdp.svg"
          alt="Line2147"
          className="home-line2"
        />
        <span className="home-text42">
          <span>Goblo</span>
        </span>
        <span className="home-text44">
          <span>
            Lorem ipsum dolor sit amet consectetur. Nibh diam lorem commodo
            cras. Neque scelerisque tempor porttitor sed magna ac egestas in.
            Quis risus egestas sagittis lobortis sed.
          </span>
        </span>
        <div className="home-solartrashbin2linear">
          <div className="home-group">
            <img
              src="/external/vector152-yq5n.svg"
              alt="Vector152"
              className="home-vector"
            />
            <img
              src="/external/vector153-tlf.svg"
              alt="Vector153"
              className="home-vector1"
            />
          </div>
        </div>
        <div className="home-solartrashbin2linear1">
          <div className="home-group1">
            <img
              src="/external/vector156-hkn.svg"
              alt="Vector156"
              className="home-vector2"
            />
            <img
              src="/external/vector157-rgu.svg"
              alt="Vector157"
              className="home-vector3"
            />
          </div>
        </div>
        <div className="home-solartrashbin2linear2">
          <div>
            <img
              src="/external/vector160-542r.svg"
              alt="Vector160"
              className="home-vector4"
            />
            <img
              src="/external/vector161-18cu.svg"
              alt="Vector161"
              className="home-vector5"
            />
          </div>
        </div>
        <div className="home-solartrashbin2linear3">
          <div>
            <img
              src="/external/vector164-je3u.svg"
              alt="Vector164"
              className="home-vector6"
            />
            <img
              src="/external/vector165-galb.svg"
              alt="Vector165"
              className="home-vector7"
            />
          </div>
        </div>
        <img
          src="/external/iconamooneditlight166-o81.svg"
          alt="iconamooneditlight166"
          className="home-iconamooneditlight"
        />
        <img
          src="/external/iconamooneditlight168-jmn9.svg"
          alt="iconamooneditlight168"
          className="home-iconamooneditlight1"
        />
        <div className="home-group2 home-group2">
          <span className="home-text46">
            <span>Add skill</span>
          </span>
          <img
            src="/external/icroundplus172-opbm.svg"
            alt="icroundplus172"
            className="home-icroundplus"
          />
        </div>
        <div className="home-group3 home-group3">
          <span className="home-text48">
            <span>Add Language</span>
          </span>
          <img
            src="/external/icroundplus176-wqz.svg"
            alt="icroundplus176"
            className="home-icroundplus1"
          />
        </div>
        <span className="home-text50">
          <span>Skill 1</span>
        </span>
        <span className="home-text52">
          <span>Skill 2</span>
        </span>
        <span className="home-text54">
          <span>Skill 3</span>
        </span>
        <span className="home-text56">
          <span>Skill 4</span>
        </span>
        <span className="home-text58">
          <span>Skill 5</span>
        </span>
        <span className="home-text60">
          <span>Skill 6</span>
        </span>
        <span className="home-text62">
          <span>Skill 7</span>
        </span>
        <span className="home-text64">
          <span>Skill 8</span>
        </span>
        <img
          src="/external/phlink186-0t4j.svg"
          alt="phlink186"
          className="home-phlink"
        />
        <img
          src="/external/phlink188-0v85.svg"
          alt="phlink188"
          className="home-phlink1"
        />
        <img
          src="/external/phlink190-g3.svg"
          alt="phlink190"
          className="home-phlink2"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/722365df-f269-4960-8333-8668c6649556?org_if_sml=1351"
          alt="Rectangle22192"
          className="home-rectangle22"
        />
        <span className="home-text66">
          <span>Company Logo</span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/75ac148c-a668-478f-a91f-6e375b377c1f?org_if_sml=14010"
          alt="Rectangle12194"
          className="home-rectangle12"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/c628dcb9-13ee-4876-9bfe-a2c4e72b4e3a?org_if_sml=11840"
          alt="Rectangle31195"
          className="home-rectangle31"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/38573012-1c7a-474f-b967-3327cb499ed5?org_if_sml=12370"
          alt="Rectangle28196"
          className="home-rectangle28"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/50c39ca0-55ff-4473-9450-967c6fe50da6?org_if_sml=11351"
          alt="Rectangle39197"
          className="home-rectangle39"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/c244f95b-d01f-4482-8df1-9a3ab6345645?org_if_sml=13373"
          alt="Rectangle32198"
          className="home-rectangle32"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/d7b15f4b-8ba7-4167-9832-42c3ad0abc92?org_if_sml=1683"
          alt="Rectangle29199"
          className="home-rectangle29"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/271cf9f3-f933-4bff-9d4e-58ad48edcbf4?org_if_sml=13207"
          alt="Rectangle331100"
          className="home-rectangle33"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/6f9748ea-3c0e-45e3-8bb8-4491a407bef0?org_if_sml=12899"
          alt="Rectangle301101"
          className="home-rectangle30"
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9f5bc526-ad3e-4c87-8e3a-47464c2869ce/15fe92c9-1dfe-4a56-ab1e-6e822cb053c2?org_if_sml=11344"
          alt="Rectangle341102"
          className="home-rectangle34"
        />s
      </div>
    </div>

  );
};

export default App;
