import { CustomCounterApp } from './components/CustomCounterApp'
import {FocusScreen} from './components/FocusScreen'
import { FatherApp } from './components/homework/FatherApp'
import { MemoApp } from './components/MemoApp'
import { Memorize } from './components/Memorize'
import { MultipleCustomHook } from './components/MultipleCustomHook'
import { SimpleForm } from './components/SimpleForm'
import { UseCallBackApp } from './components/UseCallBackApp'
import './index.css'

export const HookApp = () => {
    return (
        <main className='main-container'>
            <h1 className="title-app">HookApp</h1>            
            {/* <CustomCounterApp /> */}
            {/* <MultipleCustomHook /> */}
            {/* <FocusScreen /> */}
            {/* <Memorize /> */}
            {/* <MemoApp /> */}
            {/* <UseCallBackApp /> */}
            <FatherApp />
        </main>
    )
}