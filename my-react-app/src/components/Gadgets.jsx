import { useSelector } from 'react-redux';
import { Gadget } from "./Contents";
import Gadgetscard from "./Gadgetscard";

const Gadgets = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredGadgets = Gadget.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="gad-container">
    { filteredGadgets.length >0 ? (
      filteredGadgets.map((item) => (
        <Gadgetscard
          key={item.id}
          item={item}
        />
      ))
      ):(<p> No items there</p>)}
    </div>
  );
};

export default Gadgets;
