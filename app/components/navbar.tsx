import Link from "next/link";

export default function Navbar() {
    return (
        <div className="sticky">
            <div className="navbar">
                <Link href="/aboutus">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contactus">Contact</Link>
            </div>
        </div>
    );
}