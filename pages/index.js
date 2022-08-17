import Head from "next/head";
import Qrcode from "../components/Qrcode";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code Component</title>
        <meta name="description" content="QR Code Component" />
      </Head>
      <Qrcode />
    </div>
  );
}
