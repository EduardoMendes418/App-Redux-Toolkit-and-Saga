#### REDUX e SAGA

### (Provider), (createSagaMiddleware), (configureStore) e (catsReducer)
 
App: O componente principal da aplicação que será renderizado.

Provider: Componente que permite que a aplicação acesse o estado do Redux.

createSagaMiddleware: Função para criar um middleware que irá lidar com os efeitos colaterais usando Redux-Saga.

configureStore: Função do Redux Toolkit para configurar a store.

catsReducer: O reducer que gerencia o estado dos gatos.

catSaga: O saga que orquestra os efeitos colaterais relacionados aos gatos.

![04](https://github.com/user-attachments/assets/fa85b60e-43e3-4b1c-8a7e-aaa6e7a65b24)

### (useEffect) e (useSelector)

useEffect: Um hook do React que me permite realizar efeitos colaterais em componentes funcionais, como chamadas a APIs ou interação com o DOM.

useSelector e useDispatch: Hooks do React-Redux que me ajudam a acessar o estado do Redux (useSelector) e despachar ações para modificar esse estado (useDispatch).

 ![redux01](https://github.com/user-attachments/assets/851ae360-9ad2-4244-a93f-518c15a55d3e)

### (call), (put) e (takeEvery)

call: É um efeito do redux-saga que permite fazer chamadas de função assíncronas, como chamadas a APIs. Ele pausa a execução da função generator até que a promessa (promise) seja resolvida.

put: Envia (dispatch) uma ação para o Redux, assim como o dispatch() do React-Redux.

takeEvery: Escuta cada disparo de uma ação específica e, para cada uma delas, executa uma função (neste caso, o workGetCatsFetch).

 ![redux02](https://github.com/user-attachments/assets/2b7ecebe-fd41-46cb-b55d-21bc8c9ab29e)

### (initialState), (getCatsFetch), (getCatsSuccess) e (getCatsFailure)

name: O nome desse slice no estado global, neste caso, 'cats'.

initialState: O estado inicial do slice, que começa com uma lista vazia de gatos (cats: []) e uma flag de carregamento (isLoading: false).

getCatsFetch: É disparado quando o processo de buscar os gatos começa. Ele altera o estado, mudando a propriedade isLoading para true, indicando que os dados estão sendo carregados.

getCatsSuccess: É chamado quando a requisição para buscar os gatos tem sucesso. Ele atualiza o estado com os dados recebidos da API (action.payload) e redefine isLoading para false, indicando que o carregamento terminou.

getCatsFailure: É disparado quando ocorre algum erro ao buscar os dados. Apenas redefine o isLoading para false, pois a tentativa falhou.

![redux03](https://github.com/user-attachments/assets/ce99b492-5677-4a8c-86b2-876ce259ef8b)




