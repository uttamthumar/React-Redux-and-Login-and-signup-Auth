import { connect } from "react-redux";
import   {Cart}  from "../components/Cart";

const mapStateToProps = state => ({
    cardData:state.cardItems
})
const mapDispatchToProps =  (dispatch) => ({
     
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart); 