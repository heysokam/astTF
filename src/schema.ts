//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps External
import { Type as T } from "@sinclair/typebox"


export const Language = T.String({ description: `
@description Identifier that represents the target language of the AST
@note The parser and code generators are responsible for creating a standard for the contents of this type.`
})

export const Description  = T.String({ description:
`@descr Human-readable string that describes the contents of the tree.`
})

export const Metadata = T.Object({
  language     :T.Optional(Language),
  description  :T.Optional(Description)
  }, {
$id : "metadata.schema.json", description : `
@descr Metadata describing the contents of the file`
})

export const TopLevel = T.Union([
  T.Ref("", {}),
  T.Ref("", {}),
], { description: `
@description Node declared/described at the toplevel of the source code`
})

export const astTF = T.Object({
  metadata  :T.Ref(Metadata.$id!, {}), // eslint-disable-line
  data      :T.Array(TopLevel, { description: "@description List of TopLevel nodes in the tree." }),
}, { description: `
@description Entry point of an astTF file`
})




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

export type Procedure = {
  name :string
}

export type Variable  = {
  data     :Data
  runtime  :boolean
}

