import styles from "../styles/Qrcode.module.css";
import Image from "next/image";

function Qrcode() {
  return (
    <div className={styles.container}>
      <div className={styles.qrcode}>
        <Image
          className={styles.image}
          src="/img/image-qr-code.png"
          height="250px"
          width="252px"
          objectFit="cover"
          alt="QR Code from Frontend Mentor"
        />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Improve your front-end skills by building projects
        </h1>
        <p className={styles.description}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default Qrcode;
