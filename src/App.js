import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-red-600 p-2">
        <h1 className="text-white font-bold text-l">SenaiNews</h1>
        <nav className="flex gap-20">
        <a href="#" className="text-white font-semibold">Home</a>
        <a href="#" className="text-white font-semibold">Sobre</a>
        <a href="#" className="text-white font-semibold">Contato</a>
        </nav>
        
      </header>

      <main className="mx-6 flex-1">
        <h1 className="mt-4 text-2xl">Principais Notícias</h1>
        <div className="flex justify-around flex-wrap gap-4 p-5">
          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80" >
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/mike-baguncinha-biden-2.png" className="h-80" alt="" />
            <h3 className="font-bold">Joe Biden convoca Mike Baguncinha para falar sobre segurança mundial</h3>
            <p>Será que finalmente teremos um pouco de paz? Tudo indica que sim!</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80 ">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/chucas-no-pais.jpg" alt="" className="h-80"/>
            <h3 className="font-bold">Chucas continuam por todo Brasil e ligam estado de alerta nos municípios</h3>
            <p>Institutos meteorológicos vem acompanhando a crescente das chucas no Brasil.</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/11/driblando-pro-ceu.png" alt="" className="h-80" />
            <h3 className="font-bold">Durante culto, homens são curados de enfermidades ao jogar futebol</h3>
            <p>Já imaginou ser curado de uma doença fazendo uma das coisas que você mais ama?</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/messi-fak-pesca-mt.jpg" alt="" className="h-80" />
            <h3 className="font-bold">É #Fake imagem de Messi pescando no interior do Mato Grosso</h3>
            <p>Jogador disse que no momento está focado em ganhar a taça Guanabara</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/luva-com-camisa-da-argentina.png" alt="" className="h-80"/>
            <h3 className="font-bold">Luva de Pedreiro comenta sobre eleições na argentina: “Receba”, disparou</h3>
            <p>"Receba?" Indagou Javier Milei</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2021/04/Codigo-de-barras-chupa_Easy-Resize.com_.jpg" alt="" className="h-80"/>
            <h3 className="font-bold">Consumidores apontam mensagens subliminares em produtos no interior de SC</h3>
            <p>Os consumidores suspeitam de Saddam Hussein</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2020/12/briga-generalizada_Easy-Resize.com_.jpg" alt="" className="h-80"/>
            <h3 className="font-bold">Briga entre gostosas e carecas deixam ao menos 3 homens feridos</h3>
            <p>A briga começou porque os carecas odeiam as gostosas</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>

          <div className="P-2 flex flex-col justify-between items-center rounded border-gray-700 border-2 w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2020/12/satanas-curitiba_Easy-Resize.com_.jpg" alt="" className="h-80"/>
            <h3 className="font-bold">Satanás é flagrado andando livremente e causa pânico em Curitiba</h3>
            <p>" ויפל אחזיה בעד השבכה בעליתו אשר בשמרון ויחל וישלח מלאכים ויאמר אלהם לכו דרשו בבעל זבוב אלהי עקרון אם אחיה מחלי זה", diz em resposta ao preconceito dos curitibanos.</p>
            <a className="bg-red-600 p-2 w-full text-center" href="" >Ver mais</a>
          </div>
          
        </div>
      </main>

      <footer className="bg-red-600 p-2">
        <h4 className="flex justify-center font-semibold">Todos os direitos reservado - 2024</h4>
      </footer>
    </div>
  );
}

export default App;
