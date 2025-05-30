import { z } from "zod";

const styleValueSchema = z.any();

const modelPublicSchema = z.any();

const modelPublicPositionedSchema = z.object({
    position: styleValueSchema,
    model: modelPublicSchema
});