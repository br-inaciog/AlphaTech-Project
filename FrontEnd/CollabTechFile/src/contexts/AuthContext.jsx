import { createContext, useState, useContext } from "react";
import secureLocalStorage from "react-secure-storage";
import { userDecodeToken } from "../auth/Auth"; // ajuste o caminho se necessário

// Cria o contexto de autenticação
const AuthContext = createContext();

// Provider que envolve a aplicação
export const AuthProvider = ({ children }) => {
  // Armazena o token JWT puro
  const [token, setToken] = useState(() => {
    return secureLocalStorage.getItem("tokenLogin") || undefined;
  });

  // Retorna o usuário decodificado ou undefined
  const usuario = token ? userDecodeToken(token) : undefined;

  // Função para atualizar token e salvar no storage
  const setUsuario = (novoToken) => {
    setToken(novoToken);
    if (novoToken) {
      secureLocalStorage.setItem("tokenLogin", novoToken);
    } else {
      secureLocalStorage.removeItem("tokenLogin");
    }
  };

  return (
    <AuthContext.Provider value={{ token, usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useAuth = () => useContext(AuthContext);
