import Header from "./Header";
import illustration1 from '../public/undraw_digital_currency_qpak.svg'
import illustration2 from '../public/undraw_vault_re_s4my.svg'
import Image from "next/image";
import Link from "next/link";

export default function Create(){
    return(
        <>
        <Header />
        <div className="flex gap-x-4 p-10 text-center">
        <div className="card bg-blue shadow-xl m-auto mt-16 p-8">
        <Image src={illustration1} className="h-64"/>
        <div className="card-body">
          <h2 className="card-title text-center text-white">Multi-Sig Wallet</h2>
          <p></p>
          <div className="card-actions">
            <Link href="/profile1"><button className="btn bg-white text-blue">Create</button></Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-blue shadow-xl m-auto mt-16 p-8">
        <Image src={illustration2} className="h-64"/>
        <div className="card-body">
          <h2 className="card-title text-white">Normal Wallet</h2>
          <p></p>
          <div className="card-actions">
            <Link href="/profile2"><button className="btn bg-white text-blue">Create</button></Link>
          </div>
        </div>
      </div>
      </div>
      </>
)
}