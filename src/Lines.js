
import React from 'react';
import A from "./Metro-Line-Folder/A.js"
import B from "./Metro-Line-Folder/B.js"
import C from "./Metro-Line-Folder/C.js"
import D from "./Metro-Line-Folder/D.js"
import E from "./Metro-Line-Folder/E.js"
import F from "./Metro-Line-Folder/F.js"
import G from "./Metro-Line-Folder/G.js"
import M from "./Metro-Line-Folder/M.js"
import L from "./Metro-Line-Folder/L.js"
import J from "./Metro-Line-Folder/J.js"
import Z from "./Metro-Line-Folder/Z.js"
import N from "./Metro-Line-Folder/N.js"
import Q from "./Metro-Line-Folder/Q.js"
import R from "./Metro-Line-Folder/R.js"
import W from "./Metro-Line-Folder/W.js"
import One from "./Metro-Line-Folder/One.js"
import Two from "./Metro-Line-Folder/Two.js"
import Three from "./Metro-Line-Folder/Three.js"
import Four from "./Metro-Line-Folder/Four.js"
import Five from "./Metro-Line-Folder/Five.js"
import Six from "./Metro-Line-Folder/Six.js"
import Seven from "./Metro-Line-Folder/Seven.js"
import T from "./Metro-Line-Folder/T.js"
import S from "./Metro-Line-Folder/S.js"

import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import SubmitForm from './SubmitForm';





function Lines() {

    //next line lets us do deeper client side routing
    let match = useRouteMatch()
    console.log(match)
    console.log(match.url)

    //state for our dropdown


    //client side routing controlls which info the user sees all at once
    return (
        <>
            <div>
                <span>
                            <table className='train-table'>
                                <tr className='table-row'>
                                    <th className='th'>Eighth Ave Line</th>
                                    <th className='th'>Sixth Ave Line</th>
                                    <th className='th'>Crosstown Line</th>
                                    <th className='th'>Canarsie Line</th>
                                    <th className='th'>Nassau Street Line</th>
                                    <th className='th'>Broadway Line</th>
                                    <th className='th'>Broadway-Seventh Ave Line</th>
                                    <th className='th'>Lexington Ave Line</th>
                                    <th className='th'>Flushing Line</th>
                                    <th className='th'>Second Ave Line</th>
                                    <th className='th'>Shuttles</th>
                                </tr>
                                <tr>
                                    <th><NavLink to={`${match.path}/a`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/NYCS-bull-trans-A-Std.svg/1280px-NYCS-bull-trans-A-Std.svg.png" className="Metro-Logo" alt="A" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/b`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NYCS-bull-trans-B-Std.svg/1280px-NYCS-bull-trans-B-Std.svg.png" className="Metro-Logo" alt="B" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/g`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NYCS-bull-trans-G-Std.svg/1280px-NYCS-bull-trans-G-Std.svg.png" className="Metro-Logo" alt="G" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/l`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/NYCS-bull-trans-L-Std.svg/1024px-NYCS-bull-trans-L-Std.svg.png" className="Metro-Logo" alt="L" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/j`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/NYCS-bull-trans-J-Std.svg/1024px-NYCS-bull-trans-J-Std.svg.png" className="Metro-Logo" alt="J" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/n`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NYCS-bull-trans-N-Std.svg/1024px-NYCS-bull-trans-N-Std.svg.png" className="Metro-Logo" alt="N" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/1`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/NYCS-bull-trans-1-Std.svg/1024px-NYCS-bull-trans-1-Std.svg.png" className="Metro-Logo" alt="1" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/4`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/NYCS-bull-trans-4-Std.svg/1024px-NYCS-bull-trans-4-Std.svg.png" className="Metro-Logo" alt="4" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/7`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/NYCS-bull-trans-7-Std.svg/1024px-NYCS-bull-trans-7-Std.svg.png" className="Metro-Logo" alt="7" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/t`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/NYCS-bull-trans-T-Std.svg/1024px-NYCS-bull-trans-T-Std.svg.png" className="Metro-Logo" alt="T" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/s`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-S-Std.svg/1024px-NYCS-bull-trans-S-Std.svg.png" className="Metro-Logo" alt="S" /></NavLink></th>
                                </tr>
                                <tr>
                                    <th><NavLink to={`${match.path}/c`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/NYCS-bull-trans-C-Std.svg/1024px-NYCS-bull-trans-C-Std.svg.png" className="Metro-Logo" alt="C" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/d`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NYCS-bull-trans-D-Std.svg/1024px-NYCS-bull-trans-D-Std.svg.png" className="Metro-Logo" alt="D" /></NavLink></th>
                                    <th></th>
                                    <th></th>
                                    <th><NavLink to={`${match.path}/z`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/NYCS-bull-trans-Z-Std.svg/1024px-NYCS-bull-trans-Z-Std.svg.png" className="Metro-Logo" alt="Z" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/q`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NYCS-bull-trans-Q-Std.svg/1024px-NYCS-bull-trans-Q-Std.svg.png" className="Metro-Logo" alt="Q" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/2`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NYCS-bull-trans-2-Std.svg/1024px-NYCS-bull-trans-2-Std.svg.png" className="Metro-Logo" alt="2" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/5`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/NYCS-bull-trans-5-Std.svg/1024px-NYCS-bull-trans-5-Std.svg.png" className="Metro-Logo" alt="5" /></NavLink></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th><NavLink to={`${match.path}/e`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYCS-bull-trans-E-Std.svg/1024px-NYCS-bull-trans-E-Std.svg.png" className="Metro-Logo" alt="E" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/f`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/NYCS-bull-trans-F-Std.svg/1024px-NYCS-bull-trans-F-Std.svg.png" className="Metro-Logo" alt="F" /></NavLink></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th><NavLink to={`${match.path}/r`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/NYCS-bull-trans-R-Std.svg/1024px-NYCS-bull-trans-R-Std.svg.png" className="Metro-Logo" alt="R" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/3`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/NYCS-bull-trans-3-Std.svg/1024px-NYCS-bull-trans-3-Std.svg.png" className="Metro-Logo" alt="3" /></NavLink></th>
                                    <th><NavLink to={`${match.path}/6`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/NYCS-bull-trans-6-Std.svg/1024px-NYCS-bull-trans-6-Std.svg.png" className="Metro-Logo" alt="6" /></NavLink></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th><NavLink to={`${match.path}/m`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NYCS-bull-trans-M-Std.svg/1024px-NYCS-bull-trans-M-Std.svg.png" className="Metro-Logo" alt="M" /></NavLink></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th><NavLink to={`${match.path}/w`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/NYCS-bull-trans-W-Std.svg/1024px-NYCS-bull-trans-W-Std.svg.png" className="Metro-Logo" alt="W" /></NavLink></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </table>
                    <Switch>
                        <Route path={`${match.path}/a`}>
                            <A />
                        </Route>
                        <Route path={`${match.path}/c`}>
                            <C />
                        </Route>
                        <Route path={`${match.path}/e`}>
                            <E />
                        </Route>
                        <Route path={`${match.path}/b`}>
                            <B />
                        </Route>
                        <Route path={`${match.path}/d`}>
                            <D />
                        </Route>
                        <Route path={`${match.path}/g`}>
                            <G />
                        </Route>
                        <Route path={`${match.path}/l`}>
                            <L />
                        </Route>
                        <Route path={`${match.path}/j`}>
                            <J />
                        </Route>
                        <Route path={`${match.path}/n`}>
                            <N />
                        </Route>
                        <Route path={`${match.path}/1`}>
                            <One />
                        </Route>
                        <Route path={`${match.path}/4`}>
                            <Four />
                        </Route>
                        <Route path={`${match.path}/7`}>
                            <Seven />
                        </Route>
                        <Route path={`${match.path}/T`}>
                            <T />
                        </Route>
                        <Route path={`${match.path}/Z`}>
                            <Z />
                        </Route>
                        <Route path={`${match.path}/Q`}>
                            <Q />
                        </Route>
                        <Route path={`${match.path}/2`}>
                            <Two />
                        </Route>
                        <Route path={`${match.path}/5`}>
                            <Five />
                        </Route>
                        <Route path={`${match.path}/F`}>
                            <F />
                        </Route>
                        <Route path={`${match.path}/R`}>
                            <R />
                        </Route>
                        <Route path={`${match.path}/3`}>
                            <Three />
                        </Route>
                        <Route path={`${match.path}/6`}>
                            <Six />
                        </Route>
                        <Route path={`${match.path}/M`}>
                            <M />
                        </Route>
                        <Route path={`${match.path}/W`}>
                            <W />
                        </Route>
                        <Route path={`${match.path}/S`}>
                            <S />
                        </Route>
                    </Switch>
                </span>
            </div>
            <SubmitForm />






        </>
    )
}

export default Lines