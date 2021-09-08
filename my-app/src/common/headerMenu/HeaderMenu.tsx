import React from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../../redux/store"
import {logoutTC} from "../../../redux/reducers/login-reducer"
import {RequestStatusType} from "../../../redux/reducers/app-reducer"
import {MainTitle} from "../mainTitle/MainTitle"
import {Button} from "../button/Button"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import {useStyles} from "./HeaderMenuTabsStyles"
import s from "./HeaderMenu.module.scss"


type HeaderMenuPropsType = {}

export const HeaderMenu = React.memo((props: HeaderMenuPropsType) => {

    const classes = useStyles()

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.appReducer.status)
    const dispatch = useDispatch()

    const onLogoutClickHandler = () => {
        dispatch(logoutTC())
    }

    const [value, setValue] = React.useState(0)

    const onTabClickChangeHandler = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className={s.headerMenu}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.titleWrap}>
                        <MainTitle title={"It-Incubator"}/>
                    </div>

                    <div className={s.tabsWrap}>
                        <div className={classes.root}>
                            <AppBar position="static">
                                <Tabs value={value} onChange={onTabClickChangeHandler} aria-label="simple tabs example">
                                    <Tab label="Packs list" className={s.tabPack} component={Link} to="/"/>
                                    <Tab label="Profile" className={s.tabProfile} component={Link} to="/profile"/>
                                </Tabs>
                            </AppBar>
                        </div>
                    </div>

                    <Button
                        onClick={onLogoutClickHandler}
                        disabled={status === "loading"}
                        className={s.logoutButton}>Log out
                    </Button>

                </div>
            </div>
        </div>
    )
})