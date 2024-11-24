import { useState } from "react";

interface Props {
    page?: "home" | "about" | "services" | "contact";
}

export default function Header({ page = "home" }: Props) {
    const [pageName, setPageName] = useState(page);
    const [open, setOpen] = useState(false);

    return (
        <header className="font-montserrat w-full flex flex-col fixed z-10 bg-gray-500/50">
            <button id="openMenu" className="flex justify-start px-3 py-2 w-full md:hidden" onClick={() => setOpen(!open)}>
                {
                    open ? (<ion-icon
                        name="close-circle-outline"
                        class="text-yellow-500"
                        style={{ 
                            transform: open ? "rotate(-180deg)" : "rotate(180deg)",
                            transition: "transform 500ms ease-in-out",    
                        }}
                        size="large"
                    ></ion-icon>):(<ion-icon
                        name="menu-outline"
                        class="text-yellow-500"
                        size="large"
                    ></ion-icon>)
                }
                
            </button>

            <nav className={`w-full justify-end bg-gray-500/50 absolute top-12 transition-[left] duration-500 ${open ? "left-0":"left-[-100%]"} md:static`} style={{ 
                
                
             }}>
                <ul className="flex flex-col md:flex-row md:justify-end divide-y divide-gray-600 md:divide-none">
                    <li className="px-4 py-2 text-center">
                        <a
                            href="#home"
                            className="text-yellow-500"
                            onClick={() => setOpen(false)}
                        >
                            Inicio
                        </a>
                    </li>
                    <li className="px-4 py-2 text-center">
                        <a
                            href="#about-us"
                            className="text-yellow-500"
                            onClick={() => setOpen(false)}
                        >
                            Sobre nosotros
                        </a>
                    </li>

                    <li className="px-4 py-2 text-center">
                        <a
                            href="#services"
                            className="text-yellow-500"
                            onClick={() => setOpen(false)}
                        >
                            Servicios
                        </a>
                    </li>

                    <li className="px-4 py-2 text-center">
                        <a
                            href="#contact"
                            className="text-yellow-500"
                            onClick={() => setOpen(false)}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
