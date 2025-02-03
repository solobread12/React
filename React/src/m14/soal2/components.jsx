import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const CurrencyFormatter = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return <span>{formattedNumber}</span>;
};

const Product = ({ product, onChange }) => {
  const formattedPrice = <CurrencyFormatter number={product.price} />;
  const [count, setCount] = useState(0);
  const totalPrice = count * product.price;

  const handleTambah = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice + product.price);
  };

  const handleKurang = () => {
    const newCount = count ? count - 1 : 0;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice - product.price);
  };

  const handleClick = () => {
    window.open(`/product/${product.id}`, "_self");
  };

  return (
    <div
      className="flex flex-col items-center border p-4 m-4 rounded-lg shadow-md cursor-pointer"
      data-id={product.id}
      onClick={handleClick}
    >
      <img src={product.image} className="w-48 h-48 object-contain" alt="" />
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-xl text-gray-600">{formattedPrice}</p>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleTambah}
          >
            Tambah
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={handleKurang}
          >
            Kurang
          </button>
        </div>
        <div className="mt-2">
          <p className="text-xl font-medium">{count}</p>
        </div>
      </div>
      {count ? (
        <p className="mt-4 text-lg font-semibold">
          Total Harga: <CurrencyFormatter number={totalPrice} />
        </p>
      ) : null}
    </div>
  );
};

const Summary = ({ summary }) => {
  const totalHargaKeseluruhan = summary.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Ringkasan Pembelian</h2>
      <ul>
        {summary
          .filter((product) => product.quantity > 0)
          .map((product) => (
            <li key={product.id} className="text-lg mb-2">
              {product.title} x {product.quantity} ={" "}
              <CurrencyFormatter number={product.totalPrice} />
            </li>
          ))}
      </ul>
      <h3 className="text-2xl font-bold mt-4">
        Total Keseluruhan: <CurrencyFormatter number={totalHargaKeseluruhan} />
      </h3>
    </div>
  );
};

const HeaderHome = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwtDecode(token);
      // setProfile(decode);
      axios
        .get(`https://api.escuelajs.co/api/v1/users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setProfile(response.data);
        });
    }
  }, []);

  if (!profile.name) {
    return <div>Loading...</div>;
  }

  return (
    <div id="header">
      <h1>Product List</h1>
      <div>
        Welcome, {profile.name}
        <img
          src={profile.avatar}
          alt="User Logo"
          className="user-logo"
          width={"40px"}
          height={"40px"}
          onClick={() => navigate("/profile")}
        />{" "}
        <button onClick={LogOut}>Logout</button>
      </div>
    </div>
  );
};

const ProfileDetail = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwtDecode(token);
      // setProfile(decode);
      axios
        .get(`https://api.escuelajs.co/api/v1/users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setProfile(response.data);
          // console.log(response.data);
        });
    }
  }, []);

  if (!profile.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="outer-profile" id="profileDetail">
      <div className="inner-profile">
        <h2>Profile Detail</h2>
        <img src={profile.avatar} alt="" />
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Role: {profile.role}</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [summary, setSummary] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);




    

  const handleProductChange = (id, quantity, totalPrice) => {
    setSummary((prevSummary) => {
      const productIndex = prevSummary.findIndex(
        (product) => product.id === id
      );
      if (productIndex === -1 && quantity > 0) {
        return [
          ...prevSummary,
          {
            id,
            title: products.find((p) => p.id === id).title,
            quantity,
            totalPrice,
          },
        ];
      } else if (quantity > 0) {
        const newSummary = [...prevSummary];
        newSummary[productIndex] = {
          ...newSummary[productIndex],
          quantity,
          totalPrice,
        };
        return newSummary;
      } else {
        return prevSummary.filter((product) => product.id !== id);
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="p-6">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onChange={handleProductChange}
            className="productOuter"
          />
        ))}
      </div>
      <Summary summary={summary} />
    </div>
  );
};

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-8">
        <img src={product.image} className="w-80 h-80 object-contain" alt={product.title} />
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <CurrencyFormatter number={product.price} />
          <p className="text-sm text-gray-600 mt-4">{product.description}</p>
        </div>
      </div>
      <Link to={"/"} className="text-blue-500 mt-6 inline-block">
        Back
      </Link>
    </div>
  );
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
        // const token = response.data.token;

        localStorage.token ? navigate("/") : navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      });

    setEmail("");
    setPassword("");
  };

  const id = Math.floor(Math.random() * 30);
  const [freeEmail, setFreeEmail] = useState("");
  const [freePassword, setFreePassword] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/users/${id}`)
      .then((response) => {
        setFreeEmail(response.data.email);
        setFreePassword(response.data.password);
      });
  }, []);

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        username: {freeEmail}, password: {freePassword}
      </p>
    </div>
  );
}


export { ProductList, ProductDetail, ProfileDetail, LoginPage  };