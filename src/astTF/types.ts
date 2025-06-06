//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps libs
import { type Static } from "@sinclair/typebox"
// @deps astTF
import * as S from './schema'


//______________________________________
// @section Schema Types
//____________________________
// Elements: Base
export type SourceCode     = Static<typeof S.SourceCode>
export type SourceLocation = Static<typeof S.SourceLocation>
export type Identifier     = Static<typeof S.Identifier>
export type Type           = Static<typeof S.Type>
export type LiteralValue   = Static<typeof S.LiteralValue>
export type Integer        = Static<typeof S.Integer>
export type Strng          = Static<typeof S.Strng>
export type Literal        = Static<typeof S.Literal>
export type Data           = Static<typeof S.Data>
export type Return         = Static<typeof S.Return>
// Elements: General
export type ExpressionKind = Static<typeof S.ExpressionKind>
export type Expression     = Static<typeof S.Expression>
export type ExpressionList = Static<typeof S.ExpressionList>
export type StatementKind  = Static<typeof S.StatementKind>
export type Statement      = Static<typeof S.Statement>
export type StatementList  = Static<typeof S.StatementList>
// Elements: TopLevel
export type Variable       = Static<typeof S.Variable>
export type Procedure      = Static<typeof S.Procedure>
// Root Data
export type Language       = Static<typeof S.Language>
export type Description    = Static<typeof S.Description>
export type Metadata       = Static<typeof S.Metadata>
export type TopLevelKind   = Static<typeof S.TopLevelKind>
export type TopLevel       = Static<typeof S.TopLevel>
export type AstData        = Static<typeof S.AstData>
export type astTF          = Static<typeof S.astTF>

