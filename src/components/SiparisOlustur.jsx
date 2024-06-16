import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  FormGroup,
  Input,
  Label,
  Button,
  Form,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Inform from "./Inform";

const SiparisOlustur = ({ setSiparis }) => {
  const [name, setName] = useState("");
  const [boyutSec, setBoyutSec] = useState("");
  const [hamurKalinligi, setHamurKalinligi] = useState("");
  const [ekMalzeme, setEkMalzeme] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [urunSayisi, setUrunSayisi] = useState(0);
  const [toplamUcret, setToplamUcret] = useState(0);

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
      name.length >= 3 &&
      ekMalzeme.length >= 4 &&
      ekMalzeme.length <= 10;
    setIsValid(isFormValid);
  }, [boyutSec, hamurKalinligi, name, ekMalzeme, urunSayisi]);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

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

        history.push("/success");
        console.log("başarılı", response);
      })
      .catch((error) => {
        console.error(error);
        history.push("/order");
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
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setBoyutSec(e.target.value);
  };

  const handleHamurChange = (e) => {
    setHamurKalinligi(e.target.value);
  };

  const handleMalzemelerChange = (e) => {
    const malzeme = e.target.value;
    if (ekMalzeme.includes(malzeme)) {
      setEkMalzeme(ekMalzeme.filter((item) => item !== malzeme));
    } else {
      setEkMalzeme([...ekMalzeme, malzeme]);
    }
  };

  const handleNotlarChange = (e) => {
    setSiparisNotu(e.target.value);
  };

  return (
    <>
      <Inform />
      <Card className="mx-auto max-w-2xl border-none ">
        <Form>
          <CardBody className="flex justify-center items-center space-x-4 ">
            <div className="w-1/2">
              <FormGroup className="text-xs mb-7 mt-0 ml-4">
                <Label className="text-s mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700">
                  Boyut Seç
                </Label>
                <FormGroup check>
                  <Input
                    name="radio"
                    type="radio"
                    value="Küçük"
                    checked={boyutSec === "Küçük"}
                    onChange={handleSizeChange}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-customYellow checked:border-transparent focus:outline-none"
                    data-cy="radio3-input"
                  />
                  <Label className="text-[12px]  mt-[3px] ml-1">Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio"
                    type="radio"
                    value="Orta"
                    checked={boyutSec === "Orta"}
                    onChange={handleSizeChange}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-customYellow checked:border-transparent focus:outline-none"
                    data-cy="radio2-input"
                  />
                  <Label className="text-[12px]  mt-[3px] ml-1">Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio"
                    type="radio"
                    value="Büyük"
                    checked={boyutSec === "Büyük"}
                    onChange={handleSizeChange}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-customYellow checked:border-transparent focus:outline-none "
                    data-cy="radio1-input"
                  />
                  <Label className="text-[12px] mt-[3px] ml-1">Büyük</Label>
                </FormGroup>
              </FormGroup>
            </div>

            <div className="w-1/2 mb-10">
              <FormGroup className="mb-[20px]">
                <Label className="text-s mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700 ">
                  Hamur Seç
                </Label>
                <Input
                  className="text-xs text-customGray  bg-customBej "
                  id="exampleSelect"
                  name="hamurKalinligi"
                  type="select"
                  value={hamurKalinligi}
                  onChange={handleHamurChange}
                >
                  <option className="text-[11px] text-customGray ">
                    -Hamur Kalınlığı Seç-
                  </option>
                  <option className="text-[12px]">İnce Hamur</option>
                  <option className="text-[12px]">Klasik Hamur</option>
                  <option className="text-[12px]">Kalın Hamur</option>
                </Input>
              </FormGroup>
            </div>
          </CardBody>

          <CardBody>
            <FormGroup className="text-xs mb-7 mt-4 ml-4">
              <Label className="text-1 mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700">
                Ekstra Malzemeler
              </Label>
            </FormGroup>
            <span className="mb-7 mt-4 ml-4 font-roboto text-customGray text-[13px]">
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </span>
            <FormGroup className="mb-7 mt-4 ml-4  text-xs  grid grid-cols-3 ">
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
                      type="checkbox"
                      name="malzeme"
                      className="w-4 h-4 checked:border-transparent  checked:bg-customYellow"
                      value={ek}
                      checked={ekMalzeme.includes(ek)}
                      onChange={handleMalzemelerChange}
                      data-cy="malzeme-input"
                    />
                    <Label className="p-1 mb-[3px]" htmlFor={ek}>
                      {ek}
                    </Label>
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>
            {ekMalzeme.length > 10 && (
              <p className=" mt-4 ml-4 font-roboto text-customGray text-[13px]">
                En fazla 10 malzeme seçebilirsiniz!
              </p>
            )}

            <FormGroup>
              <Label
                className="text-1 mt-5 ml-4 block text-sm font-bold text-slate-700"
                for="text"
              >
                Sipariş Notu
              </Label>
              <Input
                className="mb-2 mt-4 ml-4 text-[12px] bg-customBej font-roboto"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={siparisNotu}
                onChange={handleNotlarChange}
              />
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
                onChange={handleNameChange}
                data-cy="isim-input"
              />
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
            <Button
              className="hover:bg-customYellow bg-customBej font-roboto border-none rounded-none text-customGray w-18 h-10"
              onClick={() => setUrunSayisi(0)}
            >
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

          <div className="flex justify-end ">
            <Link to="/success">
              <button
                className="hover:bg-yellow-600 bg-customYellow ml-auto border-none py-2 text-customBoldGray pt-2 w-60 font-roboto  "
                type="button"
                disabled={!isValid}
                onClick={handleSubmit}
                data-cy="submit-button"
              >
                SİPARİŞ VER
              </button>
            </Link>
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
      <h2 className="text-1 mt-3 ml-4 mb-4 block text-sm font-bold text-slate-700 ">
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
