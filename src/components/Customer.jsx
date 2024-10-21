import { useEffect, useState } from 'react';
import { Card, Col, Row, Layout } from 'antd';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

const App = () => {
    const [saleInfo, setSaleInfo] = useState([]);
    const [dataVenda, setDataVenda] = useState('');
    const [percentual, setPercentual] = useState('');

    useEffect(() => {
        // Pegar o parâmetro 'id' da URL
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id'); // Aqui pegamos o valor do parâmetro 'id'

        // Verifique se o id foi encontrado
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/orderitens/${id}`) // Use o id na requisição
                .then(response => {
                    console.log(response.data.saleinfo); // Verifique a estrutura aqui
                    setSaleInfo(response.data.saleinfo);
                    
                    // Defina data_venda e percentual a partir do response
                    if (response.data.saleinfo.length > 0) {
                        const vendaData = response.data.saleinfo[0].data_venda; // Supondo que data_venda esteja na primeira venda
                        setDataVenda(formatDate(vendaData)); // Formata a data
                        setPercentual(Math.floor(Number(response.data.saleinfo[0].percentual))); // Converte para inteiro
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.error('ID não encontrado na URL');
        }
    }, []); // O array vazio significa que esse efeito só roda na montagem do componente

    // Calcular o total da venda
    const totalVenda = saleInfo.reduce((total, item) => {
        const subtotal = item.subtotal && typeof item.subtotal === 'string' ? Number(item.subtotal) : 0;
        return total + subtotal;
    }, 0);

    // Função para formatar a data
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>Sistema Varejo</h1>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 16 }}>
                {/* Exibir o valor total acima dos cards */}
                <h2 style={{ textAlign: 'center' }}>
                    Valor total: R$ {totalVenda.toFixed(2)}
                </h2>
                <Row gutter={16}>
                    {saleInfo.length > 0 ? (
                        saleInfo.map((item, index) => (
                            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                                <Card
                                    title={item.nome} // Usar o nome do produto como título do card
                                    bordered={false}
                                >
                                    <p>Descrição: {item.descricao}</p>
                                    <p>Quantidade: {item.quantidade}</p>
                                    <p>
                                        Preço Unitário: R$ {item.preco_unitario && typeof item.preco_unitario === 'string' ? Number(item.preco_unitario).toFixed(2) : 'N/A'}
                                    </p>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col span={24}>
                            <p>Nenhum item encontrado.</p>
                        </Col>
                    )}
                </Row>
                {/* Adicionando as informações de data_venda e percentual após os cards */}
                {dataVenda && percentual && (
                    <div style={{ textAlign: 'center', marginTop: 20 }}>
                        <p>Data da Venda: {dataVenda}</p>
                        <p>Percentual de desconto: {percentual}%</p>
                    </div>
                )}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Contato: email@exemplo.com | Telefone: (11) 1234-5678
            </Footer>
        </Layout>
    );
};

export default App;