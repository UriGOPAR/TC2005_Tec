exports.getConoceme =(request,response,next)=>{
    let html = `
    <html>
    <head><meta charset="utf-8"></head><body>
    <h1>Sobre mí</h1>
    <footer>Uri Jared Gopar Morales_A01709413 <br> Correo: A01709413@tec.mx <br> Editor: Visual Studio Code <br> Link del editor:https://code.visualstudio.com/ </footer>
    <br>
    <br>
    <h1>PREGUNTAS LAB_13</h1>
    <p>¿Qué beneficios encuentro en el MVC</p>
    <p>Los beneficios que encuentro son para que el codigo este más ordenado, No codigo espaguetti. Si existe un problema es una manera más rapida de saber en donde se encuentra este, para que mas personas puedan interpretar lo que hace el código</p>
    <p>¿Encuentras alguna desventaja?</p>
    <p>Sí, la desventaja que yo encuentro es que tenemos muchas carpetas, lo cual se vuelve tedioso, y debes de tener mucho cuidado con ver que llamas</p>
    <a href="../ordenar/pedir">Volver a la principal</a>
    <br>
    <a href="/sobremi/bandas">Conoce de mis bandas favoritas</a>

`;
response.send(html);
};

exports.getBandas = (request,response,next)=>{
    let html = `
    <strong>MIS BANDAS FAVORITAS</strong><br>
    <table>
        <thead>
        <th scope="col">Banda</th>
        <th scope="col">Canción Favorita</th>
        <th scope="col">Album</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Greenday</th>
            <td>Boulevard Of Broken Dreams</td>
            <td>American Idiot</td>
        </tr>
        <tr>
            <th scope="row">Cage The Elephant</th>
            <td>Ready To Let Go</td>
            <td>Social Cues</td>
        </tr>
        <tr>
            <th scope="row">The Strokes</th>
            <td>The Adults Are Talking</td>
            <td>The New Abnormal</td>
        </tr>
        <tr>
            <th scope="row">Artic Monkeys</th>
            <td>Fluorescent Adolescent</td>
            <td>Worst Nightmare</td>
        </tr>
        <tr>
            <th scope="row">Gorillaz</th>
            <td>On Melancholy Hill</td>
            <td>Plastic Beach</td>
        </tr>
        <tr>
            <th scope="row">Muse</th>
            <td>Knights of Cydonia</td>
            <td>Black holes and Revelation</td>
        </tr>
    </tbody>
    </table>
    <br>
    <a href="/sobremi/conoceme">Atrás</a>
<br>
`;
response.send(html);

};