//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps External
import { Type as T } from "@sinclair/typebox"

export const Suffix = ".schema.json"

/**
 * @description Collection of references that will be converted into the specification's .schema files.
 * */
export const Refs = {
  // Base Elements
  Identifier : "indentifier" + Suffix,
  // Elements
  Procedure  : "procedure"   + Suffix,
  Variable   : "variable"    + Suffix,
  // Root Data
  Metadata   : "metadata"    + Suffix,
  astTF      : "astTF"       + Suffix
}


//______________________________________
// @section Elements
//____________________________
export const Identifier = T.String({
description:`The Identifier used to represent this Element.`
})

export const Procedure = T.Object({
  name  :T.Required(Identifier),
}, {$id: Refs.Procedure,
description: `@description TODO:`
}) // TODO:

export const Variable = T.Object({
  name  :T.Required(Identifier),
}, {$id: Refs.Variable,
description: `@description TODO:`
}) // TODO:

export const TopLevel = T.Union([
  T.Ref(Refs.Procedure),
  T.Ref(Refs.Variable),
], {
description: `@description Node declared/described at the toplevel of the source code`
})


//______________________________________
// @section Root Data
//____________________________
export const Language = T.String({
description:`@description Identifier that represents the target language of the AST
@note The parser and code generators are responsible for creating a standard for the contents of this type.`
})

export const Description  = T.String({
description:`@description Human-readable string that describes the contents of the tree.`
})

export const Metadata = T.Object({
  language     :T.Optional(Language),
  description  :T.Optional(Description)
  }, {$id: Refs.Metadata,
description:`@description Metadata describing the contents of the file`
})

export const astTF = T.Object({
  metadata  :T.Ref(Refs.Metadata),
  data      :T.Array(TopLevel, { description:`@description List of TopLevel nodes in the tree.` }),
}, {$id: Refs.astTF,
description:`@description Entry point of an astTF file`
})


//______________________________________
// @section Specification Files
//____________________________
export const Specification = [
  { id: Refs.astTF,      schema: astTF      },
  { id: Refs.Metadata,   schema: Metadata   },
  { id: Refs.Identifier, schema: Identifier },
  { id: Refs.Variable,   schema: Variable   },
  { id: Refs.Procedure,  schema: Procedure  },
]


//______________________________________
// @section TODO: Organize
//____________________________
export const LiteralValue = T.String()


//______________________________________
// @section TODO: Port to Typebox
//____________________________
type LiteralValue_t = string  // FIX: Remove
export type Integer = {
  signed  :boolean
  value   :LiteralValue_t
}

export type Strng = {
  multiline  :boolean
  value      :LiteralValue_t
}

export type Literal = Integer | Strng

export type Expression = Literal

export type Data = {
  value  :Expression
  read   :boolean
  write  :boolean
}

export type Procedure_t = {
  name :string
}

export type Variable_t  = {
  data     :Data
  runtime  :boolean
}

