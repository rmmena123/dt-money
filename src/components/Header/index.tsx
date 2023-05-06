import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg"

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="Logo DT Money" />
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}