import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
const publicKey = import.meta.env.VITE_PublicKey;
console.log(publicKey)
const MPButton = ({titulo,precio,cantidad}) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);

  initMercadoPago(publicKey);

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/create_preference", {
        description: titulo,
        price: precio,
        quantity: cantidad,
      });
      
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = async () => {
    try {
      setLoading(true);
      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <div>
        <div>
          <button onClick={handleBuy} disabled={loading}>
            {loading ? 'Cargando...' : 'Comprar'}
          </button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>
  );
};
export default MPButton;