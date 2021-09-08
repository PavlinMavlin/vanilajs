import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import SearchIcon from "@material-ui/icons/Search"
import {InputBase} from "@material-ui/core"
import {useStyles} from "./SearchInputStyles"
import s from "./SearchInput.module.scss"

type SearchInputPropsType = {
    onKeyPressEnter: (value: string) => void
}

export const SearchInput = React.memo((props: SearchInputPropsType) => {

    const classes = useStyles()

    const [searchValue, setSearchValue] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.onKeyPressEnter(searchValue.trim())
        }
    }

    return (
        <div className={s.input}>
            <div className={classes.grow}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        type={"text"}
                        value={searchValue}
                        onChange={onChangeHandler}
                        onKeyPress={onKeyPressHandler}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': "search"}}
                        className={classes.input}
                    />
                </div>
            </div>
        </div>
    )
})