import Link from "next/link";
import Image from "next/image";
import LogoNanaiResort from "../../../public/img/logoNanaiResort.png";
import Menu from "../../../public/img/menu.png";

import { Container } from "./style";

export default function Header() {
  return (
    <Container>
      <div>
        <div>
          <Image src={LogoNanaiResort} alt="" height={50} width={50} />
        </div>
        <div>
          <h2>Nanai Residence</h2>
        </div>
      </div>
      <div>
        <div>
          <Image src={Menu} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nam nobis consectetur exercitationem commodi temporibus, iure, totam
            dicta numquam aspernatur fuga, quidem culpa molestiae? Quod velit in
            sapiente veniam magnam.
          </p>
        </div>
        <div></div>
        <div>
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Reserve</Link>
            </li>
            <li>
              <Link href="">O Nanai Resort</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
