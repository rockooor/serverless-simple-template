import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createReturn } from "../../helpers/return";

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    console.log(event);

    return createReturn(
        200,
        JSON.stringify({
            status: "success",
            result: {
                event,
            },
        })
    );
};
