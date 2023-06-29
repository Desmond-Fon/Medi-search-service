import Nav from "../../components/Nav";
import map from '../../assets/mapp.png'

const Home = () => {
    return (<>
        <div>
            <Nav />
            <div className="flex justify-between px-[120px] mt-[50px]">
                <div className="flex flex-col items-start mt-[30px]">
                    <h1 className="text-[60px] font-[700] leading-[76px] text-[#333] mb-[15px]">Healthcare search made easy </h1>
                    <p className="text-[18px] w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    <button className='px-[35px] py-[10px] rounded-[5px] bg-[#4762FF] text-[18px] font-[600] text-white mt-[32px]'>Try it out</button>

                </div>
                <div>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    </>);
}

export default Home;