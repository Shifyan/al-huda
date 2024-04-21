import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="cover">
        <div className="image">
          <Link href="#" className="text-lg inline-block">
            <Image
              alt="Logo Yayasan"
              src="/logo-yayasan.png"
              width={250}
              height={150}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
