import { Button } from "@radix-ui/themes";
import theme from "../utils/theme";

interface LinkButtonProps {
    imgSrc?: string;
    linkUrl: string;
    text: string;
}

const LinkButton = ({
    imgSrc,
    linkUrl,
    text,
}: LinkButtonProps): React.ReactElement => {
    const onClick = () => {
        window.open(linkUrl, "_blank");
    };

    return (
        <Button
            size="3"
            onClick={onClick}
            variant="surface"
            color={theme.light}
            style={{ cursor: "pointer" }}
        >
            {imgSrc && <img src={imgSrc} width="20px" />}
            {text}
        </Button>
    );
};

export default LinkButton;
