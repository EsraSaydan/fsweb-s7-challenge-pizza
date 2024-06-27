import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Inform from "../components/Inform";
import { MdCheckCircle } from "react-icons/md";

export const errorMessages = {
  ad: "En az 3 karakter giriniz.",
  siparisNot: "En az 3 karakter giriniz.",
  malzeme: "En az 4 en fazla 10 seçim yapmalısınız.",
  boyut: "Lütfen pizza boyutunu seçiniz.",
  hamurKalinligi: "Lütfen hamur kalınlığı seçiniz.",
};

const SiparisOlustur = ({ setSiparis }) => {
  const [name, setName] = useState("");
  const [boyutSec, setBoyutSec] = useState("");
  const [hamurKalinligi, setHamurKalinligi] = useState("");
  const [ekMalzeme, setEkMalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [urunSayisi, setUrunSayisi] = useState(0);
  const [toplamUcret, setToplamUcret] = useState(0);
  const [errors, setErrors] = useState({
    ad: false,
    siparisNot: false,
    malzeme: false,
    boyut: false,
    hamurKalinligi: false,
  });

  const malzemePrice = 5;
  const totalMalzemePrice = ekMalzeme.length * malzemePrice;

  useEffect(() => {
    const newTotalPrice = (totalMalzemePrice + 85.5) * urunSayisi;
    setToplamUcret(newTotalPrice);
  }, [ekMalzeme, urunSayisi, totalMalzemePrice]);

  useEffect(() => {
    const isFormValid =
      urunSayisi > 0 &&
      boyutSec &&
      hamurKalinligi &&
      siparisNotu.length >= 3 &&
      name.length >= 3 &&
      ekMalzeme.length >= 4 &&
      ekMalzeme.length <= 10;
    setIsValid(isFormValid);
  }, [boyutSec, hamurKalinligi, name, ekMalzeme, urunSayisi, siparisNotu]);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ad: name.trim().length < 3,
        siparisNot: siparisNotu.trim().length < 3,
        malzeme: ekMalzeme.length < 4 || ekMalzeme.length > 10,
        boyut: boyutSec === "",
        hamurKalinligi:
          hamurKalinligi === "" || hamurKalinligi === "-Hamur Kalınlığı Seç-",
      }));
      return;
    }

    const siparis = {
      name: name,
      boyutSec: boyutSec,
      hamurKalinligi: hamurKalinligi,
      ekMalzeme: ekMalzeme,
      siparisNotu: siparisNotu,
      toplamUcret: toplamUcret,
      totalMalzemePrice: totalMalzemePrice,
    };

    axios
      .post("https://reqres.in/api/pizza", siparis)
      .then((response) => {
        setSiparis(siparis);
        toast.success("🍕 Siparişiniz başarıyla alındı! Afiyet olsun:)", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          className: "bg-white text-customRed font-bold border-l-4",
          icon: <MdCheckCircle size={27} color="red" />,
        });

        history.push("/success");
        console.log("başarılı", response);
      })
      .catch((error) => {
        console.error(error);
        toast.error("🚨 Siparişiniz gönderilemedi. Lütfen tekrar deneyin.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          className: "bg-white text-customRed font-bold border-l-4",
        });
      });
  };

  const increaseCount = () => {
    setUrunSayisi((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (urunSayisi > 0) {
      setUrunSayisi((prevCount) => prevCount - 1);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      ad: value.trim().length >= 3 ? false : true,
    }));
  };
  const handleSizeChange = (e) => {
    const value = e.target.value;
    setBoyutSec(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      boyut: value ? false : true,
    }));
  };

  const handleHamurChange = (e) => {
    const value = e.target.value;
    setHamurKalinligi(value);

    if (value !== "-Hamur Kalınlığı Seç-") {
      setErrors((prevErrors) => ({ ...prevErrors, hamurKalinligi: false }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, hamurKalinligi: true }));
    }
  };

  const handleMalzemelerChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (ekMalzeme.length < 10) {
        setEkMalzeme((prevMalzeme) => [...prevMalzeme, value]);
        setErrors((prevErrors) => ({
          ...prevErrors,
          malzeme: ekMalzeme.length >= 3 ? false : true,
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, malzeme: true }));
      }
    } else {
      setEkMalzeme((prevMalzeme) =>
        prevMalzeme.filter((item) => item !== value)
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        malzeme: ekMalzeme.length >= 3 ? false : true,
      }));
    }
  };

  const handleNotlarChange = (e) => {
    const value = e.target.value;
    setSiparisNotu(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      siparisNot: value.trim().length >= 3 ? false : true,
    }));
  };

  return (
    <>
      <Inform />
      <Card className="mx-auto max-w-2xl border-none">
        <Form onSubmit={handleSubmit}>
          <CardBody className="flex justify-center items-center space-x-4">
            <div className="w-1/2">
              <FormGroup
                className={`text-xs mb-7 mt-0 ml-4 ${
                  errors.boyut ? "is-invalid" : ""
                }`}
              >
                <Label
                  htmlFor="boyut"
                  className="text-s mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700"
                >
                  Boyut Seç
                </Label>
                <FormGroup check>
                  <Input
                    id="boyut"
                    name="boyut"
                    type="radio"
                    value="Küçük"
                    checked={boyutSec === "Küçük"}
                    onChange={handleSizeChange}
                    invalid={boyutSec === ""}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-customYellow checked:border-transparent focus:outline-none"
                    data-cy="radio3-input"
                  />
                  <Label className="text-[12px] mt-[3px] ml-1">Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    id="boyut"
                    name="boyut"
                    type="radio"
                    value="Orta"
                    checked={boyutSec === "Orta"}
                    invalid={boyutSec === ""}
                    onChange={handleSizeChange}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-customYellow checked:border-transparent focus:outline-none"
                    data-cy="radio2-input"
                  />
                  <Label className="text-[12px] mt-[3px] ml-1">Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    id="boyut"
                    name="boyut"
                    type="radio"
                    value="Büyük"
                    invalid={boyutSec === ""}
                    checked={boyutSec === "Büyük"}
                    onChange={handleSizeChange}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-customYellow checked:border-transparent focus:outline-none "
                    data-cy="radio1-input"
                  />
                  <Label className="text-[12px] mt-[3px] ml-1">Büyük</Label>
                  <FormFeedback
                    className="text-[12px] font-semibold mt-3"
                    data-cy="boyut-error-message"
                  >
                    {errors.boyut && errorMessages.boyut}
                  </FormFeedback>
                </FormGroup>
              </FormGroup>
            </div>

            <div className="w-1/2 mb-10">
              <FormGroup className="mb-[20px]">
                <Label
                  htmlFor="hamurKalinligi"
                  className="text-s mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700 "
                >
                  Hamur Seç
                </Label>
                <Input
                  className="text-xs text-customGray bg-customBej"
                  id="hamurKalinligi"
                  name="hamurKalinligi"
                  type="select"
                  value={hamurKalinligi}
                  invalid={
                    hamurKalinligi === "" ||
                    hamurKalinligi === "-Hamur Kalınlığı Seç-"
                  }
                  onChange={handleHamurChange}
                >
                  <option className="text-[11px] text-customGray">
                    -Hamur Kalınlığı Seç-
                  </option>
                  <option className="text-[12px]">İnce Hamur</option>
                  <option className="text-[12px]">Klasik Hamur</option>
                  <option className="text-[12px]">Kalın Hamur</option>
                </Input>
                <FormFeedback
                  className="text-[12px] font-semibold mt-3"
                  data-cy="hamur-error-message"
                >
                  {errors.hamurKalinligi && errorMessages.hamurKalinligi}
                </FormFeedback>
              </FormGroup>
            </div>
          </CardBody>

          <CardBody>
            <FormGroup className="text-xs mb-7 mt-4 ml-4">
              <Label
                htmlFor="malzeme"
                className="text-1 mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700"
              >
                Ekstra Malzemeler
              </Label>
            </FormGroup>
            <span className="mb-7 mt-4 ml-4 font-roboto text-customGray text-[13px]">
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </span>
            <FormGroup className="mb-7 mt-4 ml-4 text-xs grid grid-cols-3">
              {[
                "Pepperoni",
                "Tavuk Izgara",
                "Mısır",
                "Sarımsak",
                "Ananas",
                "Sosis",
                "Soğan",
                "Sucuk",
                "Biber",
                "Kabak",
                "Kanada Jambonu",
                "Domates",
                "Jalepone",
              ].map((ek, index) => (
                <FormGroup key={index} check>
                  <Label check>
                    <Input
                      id={ek}
                      type="checkbox"
                      name="malzeme"
                      className="w-4 h-4 checked:border-transparent checked:bg-customYellow"
                      value={ek}
                      checked={ekMalzeme.includes(ek)}
                      onChange={handleMalzemelerChange}
                      invalid={
                        errors.malzeme &&
                        (ekMalzeme.length < 4 || ekMalzeme.length > 10)
                      }
                      data-cy="malzeme-input"
                    />
                    {ek}
                  </Label>

                  {ekMalzeme.length > 10 ||
                    (ekMalzeme.length <= 4 && (
                      <FormFeedback
                        className="text-[12px] font-semibold mt-3"
                        data-cy="malzeme-error-message"
                      >
                        {errorMessages.malzeme}
                      </FormFeedback>
                    ))}
                </FormGroup>
              ))}
            </FormGroup>

            <FormGroup>
              <Label
                htmlFor="siparisNot"
                className="text-1 mt-5 ml-4 block text-sm font-bold text-slate-700"
                for="text"
              >
                Sipariş Notu
              </Label>
              <Input
                id="siparisNot"
                name="siparisNot"
                type="text"
                className="mb-2 mt-4 ml-4 text-[12px] bg-customBej font-roboto"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={siparisNotu}
                invalid={errors.siparisNot}
                onChange={handleNotlarChange}
              />
              <FormFeedback
                className="text-[12px] font-semibold mt-3 ml-4"
                data-cy="siparisNot-error-message"
              >
                {errors.siparisNot && errorMessages.siparisNot}
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label
                className="text-1 mt-5 ml-4 block text-sm font-bold text-slate-700"
                for="ad"
              >
                Ad
              </Label>
              <Input
                className="mb-2 mt-4 ml-4 text-[12px] bg-customBej font-roboto"
                id="ad"
                name="ad"
                placeholder="Minimum 3 karakter olacak şekilde isminizi giriniz.."
                type="text"
                value={name}
                invalid={errors.ad}
                onChange={handleNameChange}
                data-cy="isim-input"
              />
              <FormFeedback
                className="text-[12px] font-semibold mt-3 ml-4"
                data-cy="ad-error-message"
              >
                {errors.ad && errorMessages.ad}
              </FormFeedback>
            </FormGroup>
          </CardBody>
          <hr className="my-4 border-gray-500" />

          <div className="flex mb-2 mt-5 ml-9">
            <Button
              className="hover:bg-customYellow bg-customBej font-roboto border-none rounded-none text-customGray w-17 h-10"
              onClick={increaseCount}
            >
              +
            </Button>
            <Button className="hover:bg-customYellow bg-customBej font-roboto border-none rounded-none text-customGray w-18 h-10">
              {urunSayisi}
            </Button>
            <Button
              className="hover:bg-customYellow bg-customBej font-roboto border-none rounded-none text-customGray w-18 h-10"
              onClick={decreaseCount}
            >
              -
            </Button>
          </div>

          <SiparisToplami
            totalMalzemePrice={totalMalzemePrice}
            urunSayisi={urunSayisi}
            ekMalzeme={ekMalzeme}
          />

          <div className="flex justify-end">
            <button
              className="hover:bg-yellow-600 bg-customYellow ml-auto border-none py-2 text-customBoldGray pt-2 w-60 font-roboto"
              type="submit"
              disabled={!isValid}
              data-cy="submit-button"
            >
              SİPARİŞ VER
            </button>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default SiparisOlustur;

export const SiparisToplami = ({ totalMalzemePrice, urunSayisi }) => {
  const toplamUcret = (totalMalzemePrice + 85.5) * urunSayisi;

  return (
    <div className="border ml-auto w-60 p-4 mt-2 shadow-lg bg-customBej">
      <h2 className="text-1 mt-3 ml-4 mb-4 block text-sm font-bold text-slate-700">
        Sipariş Toplamı
      </h2>
      <ul>
        <li className="mt-2 flex justify-between text-customGray text-sm font-semibold">
          <p>Seçimler:</p>
          <span>{totalMalzemePrice}₺</span>
        </li>
        <li className="mt-2 flex justify-between text-customRed text-sm mb-2 font-semibold">
          <span>Toplam</span>
          <span>{toplamUcret}₺</span>
        </li>
      </ul>
    </div>
  );
};
