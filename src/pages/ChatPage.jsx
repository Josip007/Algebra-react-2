import { SubmitFormField } from "../components/SubmitFormField";
import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";

export function ChatPage() {
    return (
    <div>
        
        <div className="message-list"> Chat page
            <Message author="Snake" text="Lorem" />
            <Message author="Raiden" text="MGS2" />
        </div>
        <form>
            <InputFormField />
            <SubmitFormField label = "Send"/>
        </form>
    </div>
    );
}