import React from "react";
import UseHome from "../../hooks/useHome";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video"
function SectionVideo() {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion7;
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom:"40px",
        paddingTop:"40px" ,
      }}
    >
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="gB3F83WhmzY"
        onClose={() => setOpen(false)}
      />
      <div
        style={{
          backgroundImage: `url("https://agencia-navegantes.s3.amazonaws.com/imgvideo2_1_f7cace4ae8.jpg")`,
          backgroundRepeat: "no-repeat",
          height: "500px",
          backgroundPosition: "center",
        }}
      >
     
      </div>
    </div>
  );
}

export default SectionVideo;
