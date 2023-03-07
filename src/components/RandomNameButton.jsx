import { getRandomName } from '../library/random.js';
import { Button } from "./Button";

export function RandomNameButton(props) {
    function handleClick() {
        props.onRandomName(getRandomName());
    }

    return (
        <Button type="button" onClick={handleClick} label="Get random name" />
    );
}