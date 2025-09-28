import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");

  const [birthdate, setBirthdate] = useState("");

  const [predictionResult, setPredictionResult] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChaneBirthday = (e) => {
    setBirthdate(e.target.value);
  };

  const prediction = (e) => {
    e.preventDefault();
    const result = find_sing(birthdate);
    setPredictionResult(result);
  };

  const find_sing = (date) => {
    const date_birthday = new Date(date);
    const month = date_birthday.getMonth() + 1;
    const day = date_birthday.getDate();
    const result = {
      sign: "",
      image_url: "",
      prediction: "",
    };
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      result.sign = "Aries";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864514.png";
      result.prediction =
        "Eres energía pura y dinamismo. Hoy es un buen día para comenzar algo nuevo: un proyecto, una idea o un hábito. No tengas miedo de tomar la iniciativa.";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      result.sign = "Tauro";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864521.png";
      result.prediction =
        "Tu paciencia y constancia brillan. Hoy enfócate en disfrutar lo que ya has construido.";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      result.sign = "Géminis";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864524.png";
      result.prediction =
        "Tu curiosidad te abre puertas. Una conversación inesperada puede inspirarte hoy.";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 21)) {
      result.sign = "Cáncer";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864509.png";
      result.prediction =
        "Tu intuición está fuerte. Es momento de cuidar tu lado emocional y a los que quieres.";
    } else if ((month === 7 && day >= 22) || (month === 8 && day <= 22)) {
      result.sign = "Leo";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864522.png";
      result.prediction =
        "Brillas con fuerza. Hoy alguien reconocerá tu esfuerzo y liderazgo natural.";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      result.sign = "Virgo";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864530.png";
      result.prediction =
        "El orden y los detalles son tu aliado. Un pequeño ajuste hará gran diferencia hoy.";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      result.sign = "Libra";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864525.png";
      result.prediction =
        "La armonía es tu fuerza. Una nueva oportunidad llega si escuchas con empatía.";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 22)) {
      result.sign = "Escorpio";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864527.png";
      result.prediction =
        "Tu intensidad atrae. Hoy algo oculto puede revelarse, confía en tu intuición.";
    } else if ((month === 11 && day >= 23) || (month === 12 && day <= 22)) {
      result.sign = "Sagitario";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864528.png";
      result.prediction =
        "Tu espíritu libre necesita movimiento. Un plan espontáneo puede alegrarte el día.";
    } else if ((month === 12 && day >= 23) || (month === 1 && day <= 21)) {
      result.sign = "Capricornio";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864515.png";
      result.prediction =
        "La disciplina es tu poder. Hoy verás avances en aquello por lo que trabajaste duro.";
    } else if ((month === 1 && day >= 22) || (month === 2 && day <= 17)) {
      result.sign = "Acuario";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864512.png";
      result.prediction =
        "Las ideas nuevas fluyen. Escucha tu creatividad, hoy podrías inspirar a otros.";
    } else if ((month === 2 && day >= 18) || (month === 3 && day <= 20)) {
      result.sign = "Piscis";
      result.image_url =
        "https://cdn-icons-png.flaticon.com/512/1864/1864526.png";
      result.prediction =
        "Tu sensibilidad es un regalo. Dedica tiempo al arte, la música o la meditación.";
    }

    return result;
  };

  return (
    <div className="main-container"> {/* Contenedor principal para ambas tarjetas */}
      <div className="div-card">
        <h3>Descubre tu signo zoadiacal</h3>
        <form onSubmit={prediction}>
          <label htmlFor="name">Nombre</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Ingresa tu nombre"
            required
            className="input-value"
          />
          <br />
          <label htmlFor="birthdate">Ingresa tu Fecha de nacimiento</label>
          <br />
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={handleChaneBirthday}
            required
            className="input-value"
          />
          <br />
          <input type="submit" value="Obtener predicción" className="button" />
        </form>
      </div>

      {predictionResult && (
        <div className="div-card">
          <h3>Hola {name}, aqui esta horóscopo de hoy</h3>
          <div className="text-sing">
            <h3>{predictionResult.sign}</h3>
            <div className="">
              <img className="img" src={predictionResult.image_url} alt={`Imagen de ${predictionResult.sign}`} />
            </div>
          </div>
          <p className="text-prediction">{predictionResult.prediction}</p>
        </div>
      )}
    </div>
  );
}

export default Form;