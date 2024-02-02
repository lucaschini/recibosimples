function imprimirPedido() {
    var nomeCliente = document.getElementById('nomeCliente').value;
    var telefone = document.getElementById('telefone').value;
    var dataEntrega = document.getElementById('dataEntrega').value;
    var desc = document.getElementById('desc').value;
    var pago = document.getElementById('pago').value;
    let data = new Date();
    let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();

    

    var brDate = dataEntrega.split('-').reverse().join('/');

    // Informações da empresa
    var nomeEmpresa = 'Fare Foto';
    var telefoneEmpresa = '(11) 95314-7703';
    var enderecoEmpresa = 'Rua Coronel Leme da Fonseca, 207 - Centro, Jundiaí-SP';

    // Construir o conteúdo HTML do recibo com estilos
    var conteudoRecibo = `<style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 20px;
                            }
                            h3 {
                                color: #007BFF;
                            }
                            p {
                                margin-bottom: 10px;
                            }
                            .nome-empresa {
                                font-weight: bold;
                                font-size: 1.2em;
                                color: #333;
                            }
                            .telefone-empresa,
                            .endereco-empresa {
                                font-weight: bold;
                                color: #333;
                            }
                            div{
                                margin: 2rem;
                            }
                          </style>
                          
                                <div style='font-weight: bolder;'>
                              <div class="nome-empresa">${nomeEmpresa}</div>
                              <div class="telefone-empresa">${telefoneEmpresa}</div>
                              <div class="endereco-empresa">${enderecoEmpresa}</div>
                              
                              <div class="endereco-empresa">${dataFormatada}</div>
                              <div class="pago">${pago}</div>
                              <h3>Recibo de Pedido:</h3>
                              </div>
                              <p><strong>Nome do Cliente:</strong> ${nomeCliente}</p>
                              <p><strong>Telefone:</strong> ${telefone}</p>
                              <p><strong>Data Prevista de Entrega:</strong> ${brDate}</p>
                              <div class="endereco-empresa">${desc}</div>
                          `;

    // Criar um elemento iframe
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Adicionar o conteúdo ao documento do iframe
    iframe.contentDocument.write('<html><head><title>Recibo de Pedido</title></head><body>');
    iframe.contentDocument.write(conteudoRecibo);
    iframe.contentDocument.write('</body></html>');
    iframe.contentDocument.close();

    // Chamar a função de impressão no iframe
    iframe.contentWindow.print();

    // Remover o iframe após a impressão
    document.body.removeChild(iframe);
}
