import styled from "styled-components";
import links from "../../utils/landingLinks";

const ModernSidebar = () => {
    return (
        <Wrapper>
            <div className="content">
                <ul>
                    {links.map((link) => {
                        return <li key={link.name}><a href="">{link.name}</a></li>
                    })}
                </ul>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    position: fixed;
`;

export default ModernSidebar;