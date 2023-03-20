import React from 'react';
import NavComponent from '../NavBar/Navbar.component';
type Props = {
    children: React.ReactNode;
};
function Layoutcomponent({ children }: Props) {
    return (
        <div>
            <NavComponent />
            {children}
        </div>
    );
}

export default Layoutcomponent;