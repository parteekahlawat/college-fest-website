import workBg from '../../../public/images/background/work-bg.jpg';
import './style.css';
import Teams from './team_data';
export default function Team() {
    return (
        <div id="font-bold">
            <div
                className="relative"
                style={{
                    height: '50vh',
                }}
            >
                <div
                    className="w-full absolute h-full -z-20"
                    style={{
                        backgroundImage: `url(${workBg.src})`,
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-40 h-full w-full backdrop-blur-sm -z-10"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="w-full flex justify-center flex-wrap mt-12">
                        <div className="border border-pink-400 rounded-full p-4 md:p-5 text-pink-400 hover:bg-pink-500 transition-all hover:bg-opacity-50 flex items-center justify-center h-full">
                            <i className="fi fi-sr-star text-2xl md:text-4xl flex h-full items-center justify-center"></i>
                        </div>
                        <div className="w-full h-fit mt-6 flex justify-center text-4xl md:text-5xl">
                            Team Member
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 w-full -mt-8">
                {Teams.map((teamObject, index) => {
                    return (
                        <div key={`team-${index}`} className="w-full mt-24">
                            <div className="text-4xl md:text-5xl w-full flex justify-center">
                                {teamObject.title}
                            </div>
                            <div className="w-full flex justify-center flex-wrap mt-8">
                                {teamObject.team.map(
                                    (teamMemberObject, personIndex) => {
                                        teamMemberObject.name =
                                            teamMemberObject.name
                                                .toLowerCase()
                                                .split(' ');
                                        teamMemberObject.name =
                                            teamMemberObject.name.map(
                                                (name) => {
                                                    return (
                                                        name
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                        name.slice(1)
                                                    );
                                                },
                                            );
                                        teamMemberObject.name =
                                            teamMemberObject.name.join(' ');
                                        return (
                                            <div
                                                className={`relative w-80 h-80 md:ml-8 lg:ml-16 group ${
                                                    personIndex % 2
                                                        ? 'mt-9 mb-7'
                                                        : 'mt-4'
                                                }`}
                                                key={`team-${index}-${personIndex}`}
                                            >
                                                <div className="group-hover:transition-all absolute border border-yellow-600 rounded-full w-full h-full group-hover:border-yellow-300 group-hover:shadow-inner group-hover:shadow-yellow-100"></div>
                                                <div className="group-hover:transition-all absolute w-full h-full rounded-full bg-black bg-opacity-20 group-hover:bg-opacity-25 -z-10"></div>
                                                <div className="group-hover:transition-all absolute w-full h-full rounded-full -ml-8 mt-8 group-hover:bg-black group-hover:bg-opacity-25 -z-10"></div>
                                                <div
                                                    className="group-hover:transition-all absolute w-full h-full rounded-full -ml-8 mt-8 -z-20 shadow-sm shadow-slate-400 group-hover:shadow-md group-hover:shadow-slate-300"
                                                    style={{
                                                        background: `url(${teamMemberObject.image.src})`,
                                                        backgroundSize:
                                                            'contain',
                                                        backgroundRepeat:
                                                            'no-repeat',
                                                        backgroundPosition:
                                                            'center',
                                                    }}
                                                ></div>
                                                <div
                                                    className="group-hover:transition-all absolute w-full h-full rounded-full -ml-8 mt-8 -z-30 shadow-sm shadow-slate-400 group-hover:shadow-md group-hover:shadow-slate-300 blur-sm"
                                                    style={{
                                                        background: `url(${teamMemberObject.image.src})`,
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat:
                                                            'no-repeat',
                                                        backgroundPosition:
                                                            'center',
                                                    }}
                                                ></div>
                                                <div className="group-hover:transition-all hidden absolute w-full h-full rounded-full justify-center items-center group-hover:flex group-hover:flex-wrap">
                                                    <a
                                                        target="_blank"
                                                        href={
                                                            teamMemberObject.instagram
                                                        }
                                                    >
                                                        <i className="fi fi-brands-instagram text-4xl text-pink-700 m-2 cursor-pointer"></i>
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        href={
                                                            teamMemberObject.linkedin
                                                        }
                                                    >
                                                        <i className="fi fi-brands-linkedin text-5xl m-2 text-blue-600 cursor-pointer"></i>
                                                    </a>
                                                </div>
                                                <div className="w-full h-full flex items-end">
                                                    <div className="w-full flex flex-wrap">
                                                        <div className="hover:transition-all p-3 pl-8 pr-8 cursor-pointer text-black rounded-full text-lg cardName hover:bg-gradient-to-r from-pink-500 to-amber-500">
                                                            <div>{`${teamMemberObject.name}`}</div>
                                                            {teamMemberObject.team_name && (
                                                                <div className="font-extralight text-sm">{`${teamMemberObject.team_name}`}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
