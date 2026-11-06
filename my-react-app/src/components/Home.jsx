import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {

        navigate(path);
    };

    return (
        <div className="home-container" id='home'>
            <div className="image-card" onClick={() => handleNavigation('/mobile')} >
                <img src="https://w0.peakpx.com/wallpaper/110/397/HD-wallpaper-xiaomi-android-mobile-phone-2019.jpg" alt="Mobile Phones" />
                <h1>Mobile Phones</h1>
            </div>
            <div className="image-card" onClick={() => handleNavigation('/speakers')}>
                <img src="https://t3.ftcdn.net/jpg/01/34/14/20/360_F_134142098_35jEUodu2IkWtppO53abj0KYijvnvCNo.jpg" alt="Speakers" />
                <h1>Speakers</h1>
            </div>
            <div className="image-card" onClick={() => handleNavigation('/chargers')}>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/369374927/HQ/BB/RY/205353570/mobile-phone-charger-500x500.png" alt="Mobile Chargers" />
                <h1>Mobile Chargers</h1>
            </div>
            <div className="image-card" onClick={() => handleNavigation('/watches')}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9twFd2S4uzRz6XNAQP78tDtt5Az2_rfnINw&s" alt="Smart Watches" />
                <h1>Smart Watches</h1>
            </div>
            <div className="image-card" onClick={() => handleNavigation('/laptops')}>
                <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg" alt="Laptops" />
                <h1>Laptops</h1>
            </div>
            <div className="image-card" onClick={() => handleNavigation('/gaming')}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeqnWBJmTEsPv3LZSoiBv2HCS1UJ-BoaCXg&s" alt="Gaming" />
                <h1>Gaming</h1>
            </div>
            <div className="image-card" onClick={() => handleNavigation('/earbuds')}>
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/2/388508179/PQ/VO/TZ/3266985/boat-ad-ace-earbuds-500x500.jpg" alt="Earbuds" />
                <h1>Earbuds</h1>
            </div>
        </div>
    );
};

export default Home;
