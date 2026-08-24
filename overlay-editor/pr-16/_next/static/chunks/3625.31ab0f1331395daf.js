"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3625],{58434:(e,t,r)=>{r.d(t,{D:()=>c});var a=r(1934);let n="ord-ui-theme";function o(){return"function"!=typeof window.matchMedia?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function i(e){return"system"===e?o():e}let s=function(){try{let e=window.localStorage?.getItem(n);return"light"===e||"dark"===e||"system"===e?e:"system"}catch{return"system"}}(),l=(0,a.v)(e=>({theme:s,resolvedTheme:i(s),setTheme:t=>{let r=i(t);try{window.localStorage?.setItem(n,t)}catch{}e({theme:t,resolvedTheme:r})}}));function c(){let e=l(e=>e.theme);return{theme:e,resolvedTheme:l(e=>e.resolvedTheme),setTheme:l(e=>e.setTheme)}}"function"==typeof window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{let{theme:e}=l.getState();"system"===e&&l.setState({resolvedTheme:o()})})},83625:(e,t,r)=>{r.r(t),r.d(t,{Playground:()=>eh});var a=r(95155),n=r(12115),o=r(73321),i=r(91496),s=r(58434),l=r(28202);let c=JSON.parse('{"description":"⚠️ BETA: This specification is in beta and subject to change.\\n\\nThe ORD Overlay is an optional ORD model extension that allows patching referenced resource definition files\\n(e.g. OpenAPI, AsyncAPI, OData CSDL, MCP/A2A Agent Cards) without modifying the original source files.\\n\\nOverlays use concept-level [selectors](#overlay-selector) that are independent of the target format\'s\\ninternal structure, making them resilient to format changes.\\nA `jsonPath` selector is available as a generic fallback.\\n\\nOverlay files can be provided through the\\n[ORD Configuration endpoint](../../spec-v1/index.md#ord-configuration-endpoint),\\nor attached as `resourceDefinitions` entries on API or Event resources with type `ord:overlay:v1`.","$schema":"http://json-schema.org/draft-07/schema#","$id":"https://open-resource-discovery.org/spec-v1/interfaces/OrdOverlay.schema.json#","title":"ORD Overlay","x-ums-type":"root","type":"object","additionalProperties":false,"properties":{"$schema":{"type":"string","format":"uri-reference","description":"Optional [URL](https://tools.ietf.org/html/rfc3986) to the ORD Overlay schema (defined as a JSON Schema).\\nIf provided, this enables code intelligence and validation in supported editors (like VSCode) and tools.","anyOf":[{"type":"string","format":"uri-reference"},{"const":"https://open-resource-discovery.org/spec-v1/interfaces/OrdOverlay.schema.json#"}]},"ordOverlay":{"type":"string","description":"Version of the ORD Overlay specification.","enum":["0.1"],"examples":["0.1"]},"ordId":{"type":"string","maxLength":255,"pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):(overlay):([a-zA-Z0-9._\\\\-]+):(v0|v[1-9][0-9]*)$","description":"Optional ORD ID of this overlay document.\\nMUST be provided if the ORD Overlay is published via ORD Configuration endpoint.","examples":["sap.foo:overlay:astronomy-api-openapi:v1"]},"description":{"type":"string","minLength":1,"description":"Optional description of the overlay document itself.\\n\\nNotated in [CommonMark](https://spec.commonmark.org/) (Markdown).","examples":["This overlay adds descriptive metadata for AI use-cases\\nwithout modifying the original resource definition.\\n"]},"perspective":{"description":"Overlay-specific [perspective](../../spec-v1/index.md#perspectives) that scopes where this overlay should be applied.\\n\\nUse this together with `describedSystemType`, `describedSystemVersion`, and `describedSystemInstance`\\nto describe whether the overlay applies broadly to a system type, to one released system version,\\nor only to a specific system instance.","type":"string","title":"Overlay Perspective","x-ums-type":"ignore","oneOf":[{"const":"system-type","description":"Applies the overlay at system-type level.\\n\\nUse this when the overlay should patch the same targeted resource across versions and instances\\nof the same system type, typically for the same ORD resource major version.\\n`describedSystemType` SHOULD be provided as the identifying context."},{"const":"system-version","description":"Applies the overlay to one concrete system version.\\n\\nUse this when metadata differs between released versions and the patch should only affect\\na specific version of the target resource.\\n`describedSystemVersion` SHOULD be provided, and `describedSystemType` SHOULD also be provided as parent context."},{"const":"system-instance","description":"Applies the overlay to one concrete system instance / tenant.\\n\\nUse this when the patch reflects tenant-specific configuration, extensions, or runtime differences\\nin the target metadata.\\n`describedSystemInstance` SHOULD be provided."}],"examples":["system-type","system-version","system-instance"]},"describedSystemType":{"$ref":"#/definitions/OverlaySystemType","description":"Information on the [system type](../../spec-v1/index.md#system-type) this overlay describes.\\nThis object is identical to the ORD Document `describedSystemType` object; see [System Type](../../spec-v1/interfaces/Document.md#system-type).\\n\\nIts purpose is to link the overlay to the same system landscape model as ORD resources, if needed.\\nThis is the primary context object for `perspective: system-type`, and also the parent context\\nfor more specific `system-version` and `system-instance` overlays.\\n\\nUsually this is not necessary for static overlays if the patched resource is already selected via ORD ID."},"describedSystemVersion":{"$ref":"#/definitions/OverlaySystemVersion","description":"Information on the [system version](../../spec-v1/index.md#system-version) this overlay describes.\\nThis object is identical to the ORD Document `describedSystemVersion` object; see [System Version](../../spec-v1/interfaces/Document.md#system-version).\\n\\nIts purpose is to link the overlay to the same system landscape model as ORD resources, if needed.\\nUse this when the overlay should only patch metadata for one specific released system version.\\n\\nUsually this is not necessary for static overlays if the patched resource is already selected via ORD ID."},"describedSystemInstance":{"$ref":"#/definitions/OverlaySystemInstance","description":"Information on the [system instance](../../spec-v1/index.md#system-instance) this overlay describes.\\nThis object is identical to the ORD Document `describedSystemInstance` object; see [System Instance](../../spec-v1/interfaces/Document.md#system-instance).\\n\\nIts purpose is to link the overlay to the same system landscape model as ORD resources, if needed.\\nUse this when the overlay should only patch metadata for one concrete tenant / runtime instance.\\n\\nUsually this is not necessary for static overlays if the patched resource is already selected via ORD ID."},"visibility":{"type":"string","title":"Overlay Visibility","x-ums-type":"ignore","description":"Controls which consumers can discover and access this overlay document.\\n\\nIt does NOT control runtime access to the resources being patched — that is managed separately through authentication and authorization mechanisms.\\n\\nUse this to prevent exposing internal overlay enrichments to inappropriate consumer audiences.","oneOf":[{"const":"public","description":"The overlay can be discovered and accessed by anyone, including customers, partners, and unauthenticated external parties."},{"const":"internal","description":"The overlay can only be discovered and accessed by vendor internal consumers (e.g. applications or services of the same vendor).\\nMUST NOT be made available to external parties or vendor customers."},{"const":"private","description":"The overlay should not be discoverable outside the application / service\'s own deployment scope (e.g., outside of the provider application or the same system namespace / system type)."}]},"target":{"description":"Optional target context identifying the resource or definition file being patched.\\nSee [Overlay Target](#overlay-target) for details on identifier requirements and disambiguation.","$ref":"#/definitions/OverlayTarget"},"patches":{"type":"array","minItems":1,"description":"Ordered sequence of patches to apply to the targeted resource(s).\\nPatches are applied strictly in the order they are listed.\\nIf two patches target the same document element, both are applied in sequence —\\nthe later patch supersedes the earlier one.","items":{"$ref":"#/definitions/OverlayPatch"}},"meta":{"$ref":"#/definitions/OverlayMeta","description":"Optional arbitrary metadata associated with this overlay document for use by overlay consumers, tooling, and registries.\\nThe contents of this block are **never applied to the target document** — they are strictly out-of-band and ignored by the patch merge process.\\n\\nUse this to carry document-level information such as provenance, approval status, or processing instructions\\nthat apply to the overlay as a whole rather than to individual patches."}},"required":["ordOverlay","patches"],"definitions":{"OverlayTarget":{"type":"object","title":"Overlay Target","x-ums-type":"embedded","description":"Optional context about the target being patched.\\nThe target can refer to an ORD resource or to a referenced resource definition file.\\n\\nWhen this object is present, at least one of `ordId`, `url`, `correlationIds`, or `definitionType`\\nMUST be provided so that consumers can identify what is being patched.\\n`ordId` identifies the ORD resource whose attached definition file is being patched.\\nUse `url` and/or `definitionType` to disambiguate which definition file to target.\\n\\nExample: one OData API resource can have both `edmx` and `openapi-v3` definitions attached.\\nIn such cases, provide `definitionType` and/or `url` to make the concrete patch target explicit.\\n\\nMultiple identifiers, if provided, are treated as all pointing to the same resource.\\n\\nUse `systemInstance` to further scope the target to a specific [system instance](../../spec-v1/index.md#system-instance) (tenant).\\nThis is relevant when `perspective: system-instance` is set and the same ORD resource exists across multiple tenants.","additionalProperties":false,"properties":{"ordId":{"type":"string","description":"ORD ID of the target being patched (e.g. an API Resource, Event Resource, Data Product).\\nMUST be a valid [ORD ID](../../spec-v1/index.md#ord-id).","pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\\\-]+):([a-zA-Z0-9._\\\\-]+):(v0|v[1-9][0-9]*)$","maxLength":255,"examples":["sap.s4:apiResource:OP_API_BUSINESS_PARTNER_SRV:v1"]},"url":{"type":"string","format":"uri-reference","description":"URL or URI pointing directly to the file being patched.\\nThis is typically a resource definition file (e.g. OpenAPI, AsyncAPI, OData CSDL),\\nbut can also point to any JSON/YAML-based target document.","examples":["https://example.com/api/openapi.json","./openapi.yaml"]},"correlationIds":{"type":"array","minItems":1,"description":"Correlation IDs referencing the target resource in external registries or systems of record.\\nReuses the ORD correlation ID format: `namespace:type:localId`.\\nAll listed IDs are treated as pointing to the same resource.","items":{"type":"string","pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\\\-\\\\/]+):([a-zA-Z0-9._\\\\-\\\\/]+)$","maxLength":255},"examples":[["sap.s4:communicationScenario:SAP_COM_0008"]]},"definitionType":{"description":"Optional, but RECOMMENDED type of the target definition being patched.\\nIf provided, this SHOULD match the `type` of the referenced metadata definition\\n(as used in API/Event/Capability resource definitions).\\nThis is especially useful when target `ordId` resolves to a resource with multiple attached definitions.\\n\\nThis can be used to disambiguate how selectors are interpreted for the target.\\n\\nMUST be either:\\n- any valid [Specification ID](../../spec-v1/index.md#specification-id), or\\n- one of the pre-defined values reused from:\\n  - API Resource Definition `type`\\n  - Event Resource Definition `type`\\n  - Capability Definition `type`\\n\\nThe literal value `custom` is deprecated for `definitionType` and MUST NOT be used.\\nIn such cases, use a concrete [Specification ID](../../spec-v1/index.md#specification-id) instead.","type":"string","title":"Overlay Definition Type","x-ums-type":"ignore","anyOf":[{"type":"string","pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\\\-]+):(v0|v[1-9][0-9]*)$","description":"Any valid [Specification ID](../../spec-v1/index.md#specification-id)."},{"const":"openapi-v2"},{"const":"openapi-v3"},{"const":"openapi-v3.1+"},{"const":"raml-v1"},{"const":"edmx"},{"const":"csdl-json"},{"const":"graphql-sdl"},{"const":"wsdl-v1"},{"const":"wsdl-v2"},{"const":"a2a-agent-card"},{"const":"sap-rfc-metadata-v1"},{"const":"sap-sql-api-definition-v1"},{"const":"sap-csn-interop-effective-v1"},{"const":"asyncapi-v2"},{"const":"sap.mdo:mdi-capability-definition:v1"},{"const":"ord:overlay:v1"}],"examples":["openapi-v3","asyncapi-v2","sap.mdo:mdi-capability-definition:v1"]},"systemInstance":{"$ref":"#/definitions/OverlaySystemInstance","examples":[{"localId":"LocalTenantId123"},{"correlationIds":["sap.cld:tenant:741234567"]}]}}},"OverlayPatch":{"type":"object","title":"Overlay Patch","x-ums-type":"embedded","additionalProperties":false,"description":"A single patch action to apply to the element identified by the [Overlay Selector](#overlay-selector).","required":["action","selector"],"if":{"properties":{"action":{"enum":["update","merge"]}}},"then":{"required":["data"]},"else":{"properties":{"data":{"not":{"anyOf":[{"type":"object","maxProperties":0},{"type":"array","maxItems":0},{"type":"null"}]}}}},"properties":{"description":{"type":"string","description":"Optional human-readable note explaining the purpose or rationale of this individual patch.\\nThis field is purely informational and has no effect on patch application.\\n\\nTypical use-cases:\\n- Reviewer / audit notes explaining why a particular element is being modified.\\n- Commit-message style annotations generated by AI tooling (e.g. \\"Enriched summary for GetUser operation\\").\\n- References to tickets or decisions that motivated the change.\\n\\nMaps 1:1 to the `actions[].description` field in the\\n[OpenAPI Overlay spec](https://spec.openapis.org/overlay/v1.1.0.html), enabling lossless\\nround-trip conversion between OpenAPI overlays and ORD overlays.","examples":["Added missing description for the pagination parameters.","Marked as deprecated following platform v3 migration.","JIRA-1234: Corrected return type description."]},"action":{"type":"string","title":"Overlay Patch Action","x-ums-type":"ignore","description":"The patch operation to perform on the selected element.","oneOf":[{"const":"update","description":"Replace the selected element entirely with `data`."},{"const":"remove","description":"Remove the selected element or specific fields within it.\\n\\n- When `data` is omitted: remove the selected element from the document entirely.\\n- When `data` is provided: remove only the fields or array entries marked by the removal mask.\\n  For object masks, properties with `null` values are removed recursively.\\n  This uses JSON Merge Patch-style delete semantics where `null` indicates deletion.\\n  Nested `null` values remove nested fields as well."},{"const":"merge","description":"Deep-merge `data` into the selected element.\\n\\n- Objects are deep-merged recursively.\\n- Scalar values are overwritten by the value from `data`.\\n- Arrays are appended (new array items are added after existing items).\\n- Existing object properties not mentioned in `data` are preserved."}]},"selector":{"$ref":"#/definitions/OverlaySelector"},"data":{"$ref":"#/definitions/OverlayPatchValue"},"tags":{"type":"array","minItems":1,"description":"String labels associated with the patched element.\\nUseful for classification, domain tagging, and filtering in registries or tooling.\\n\\nThese are purely informational and have no effect on patch application or on the\\ntarget document.","items":{"type":"string","minLength":1},"examples":[["HR","Employee","Core"],["deprecated","migration-v3"]]},"meta":{"$ref":"#/definitions/OverlayMeta"}}},"OverlayMeta":{"type":"object","title":"Overlay Meta","x-ums-type":"embedded","description":"Optional arbitrary metadata for use by overlay consumers, tooling, and registries.\\nThe contents of this block are **never applied to the target document** — they are strictly out-of-band and ignored by the patch merge process.\\n\\nWhen used at the document level, this carries information about the overlay as a whole (e.g. provenance, approval status, processing instructions).\\nWhen used at the patch level, this carries information specific to the patched element (e.g. confidence scores, source references).\\n\\nThis is an open/extensible object — any properties are allowed.","additionalProperties":true,"examples":[{"sourceSystem":"AI Enrichment Pipeline v2.1","enrichmentDate":"2026-04-01"},{"someMetadataKey":{"complex":"object"}}]},"OverlaySelector":{"type":"object","title":"Overlay Selector","x-ums-type":"embedded","description":"Identifies the element in the target to patch.\\nExactly one selector type is used per patch.\\n\\nPrefer concept-level selectors over generic `jsonPath` where possible,\\nas they are resilient to structural changes in the target format.","oneOf":[{"$ref":"#/definitions/OverlaySelectorByRoot"},{"$ref":"#/definitions/OverlaySelectorByJsonPath"},{"$ref":"#/definitions/OverlaySelectorByOperation"},{"$ref":"#/definitions/OverlaySelectorByEntityType"},{"$ref":"#/definitions/OverlaySelectorByComplexType"},{"$ref":"#/definitions/OverlaySelectorByEnumType"},{"$ref":"#/definitions/OverlaySelectorByPropertyType"},{"$ref":"#/definitions/OverlaySelectorByEntitySet"},{"$ref":"#/definitions/OverlaySelectorByNamespace"},{"$ref":"#/definitions/OverlaySelectorByParameter"},{"$ref":"#/definitions/OverlaySelectorByReturnType"}]},"OverlaySelectorByRoot":{"type":"object","title":"Overlay Selector By Root","x-ums-type":"embedded","additionalProperties":false,"required":["root"],"properties":{"root":{"type":"boolean","const":true,"description":"Concept-level selector targeting the root of the document being patched.\\nMUST be `true`.\\n\\nUse this selector to patch top-level properties of any JSON/YAML-based metadata format\\nwithout coupling to specific structural paths. This is especially useful for:\\n\\n- Patching document-level metadata (title, description, version, contact info)\\n- Adding or merging top-level sections (e.g. `components`, `tags`, `servers` in OpenAPI)\\n- Extending the root object with new properties across format versions\\n\\nSupported metadata formats and typical use cases:\\n\\n**OpenAPI** (`openapi-v2`, `openapi-v3`, `openapi-v3.1+`):\\n- Patch `info.description`, `info.title`, `info.contact`\\n- Add `components.securitySchemes` or `components.schemas`\\n- Add `tags`, `servers`, or `externalDocs`\\n\\n**AsyncAPI** (`asyncapi-v2`):\\n- Patch `info` block, `servers`, `channels` at the root\\n\\n**OData CSDL JSON** (`csdl-json`):\\n- Patch root-level `$Version`, `$EntityContainer`, or add namespace objects\\n\\n**ORD Document** (no specific `definitionType`):\\n- Patch root-level ORD document properties\\n\\n**MCP / A2A** (any Specification ID):\\n- Patch top-level metadata or add root-level tool/skill definitions\\n\\nThe `root` selector is equivalent to `jsonPath: \\"$\\"` but is preferred because it\\nexplicitly communicates intent and is resilient to format differences where `$`\\nmight have ambiguous semantics."}},"examples":[{"root":true}]},"OverlaySelectorByJsonPath":{"type":"object","title":"Overlay Selector By JsonPath","x-ums-type":"embedded","additionalProperties":false,"required":["jsonPath"],"properties":{"jsonPath":{"type":"string","minLength":1,"pattern":"^\\\\$","description":"JSONPath expression targeting any location in a JSON/YAML-based target document.\\nMUST start with `$`.\\nThis is the generic structural fallback selector, supported for all JSON/YAML-based formats:\\n- `openapi-v2`, `openapi-v3`, `openapi-v3.1+`: targets any node in the OpenAPI document.\\n- `a2a-agent-card`: targets any node in the A2A Agent Card JSON document.\\n- `csdl-json`: targets any node in the OData CSDL JSON document.\\n- MCP (any Specification ID): targets any node in the MCP-compatible JSON/YAML tool metadata.\\n\\nUse concept-level selectors (`operation`, `entityType`, etc.) when available, as they are\\nresilient to structural differences between format versions. Reserve `jsonPath` for cases\\nwhere no concept-level selector covers the target location.","examples":["$.info.description","$.paths[\'/constellations\'].get"]}},"examples":[{"jsonPath":"$.info.description"},{"jsonPath":"$.paths[\'/constellations\'].get"}]},"OverlaySelectorByOperation":{"type":"object","title":"Overlay Selector By Operation","x-ums-type":"embedded","additionalProperties":false,"required":["operation"],"properties":{"operation":{"type":"string","minLength":1,"description":"Concept-level operation identifier.\\nSupported mappings by format:\\n- OpenAPI (`openapi-v2`, `openapi-v3`, `openapi-v3.1+`): maps to the `operationId` field on\\n  an HTTP operation inside `paths.{path}.{method}`.\\n- MCP (any Specification ID other than `a2a-agent-card`): maps to `tools[].name`.\\n  See: https://modelcontextprotocol.io/specification/2025-11-25/schema#tool-name\\n- A2A Agent Card (`a2a-agent-card`): maps to `skills[].id`.\\n  See: https://google.github.io/A2A/specification/#agentskill-object\\n- OData (`edmx`, `csdl-json`): maps to the Action or Function name at Schema level.\\n  MUST use the namespace-qualified name (e.g. `OData.Demo.Approval`) to be unambiguous.\\n  For OData v2 `edmx` targets: also searches FunctionImport elements in EntityContainer\\n  when no Schema-level Action/Function matches the name.\\n  For bound operations overloaded on multiple entity types, use [`jsonPath`](#overlay-selector-by-jsonpath) as a fallback\\n  to target the specific overload.\\n\\nWhen `definitionType` is set on `target`, the format is known and the selector resolves unambiguously.\\nWhen `definitionType` is absent, the implementation SHOULD infer the format from the target\\ndocument\'s content (e.g. the `openapi` field, `$schema`, or `$kind` markers).","examples":["getConstellationByAbbreviation","dispute-case-resolution","OData.Demo.Approval","OData.Demo.Rejection","getCompensationHistory"]}},"examples":[{"operation":"getConstellationByAbbreviation"},{"operation":"OData.Demo.Approval"},{"operation":"dispute-case-resolution"}]},"OverlaySelectorByEntityType":{"type":"object","title":"Overlay Selector By Entity Type","x-ums-type":"embedded","additionalProperties":false,"required":["entityType"],"properties":{"entityType":{"type":"string","minLength":1,"description":"**OData-specific** selector targeting an EntityType element by its namespace-qualified name.\\n\\nAn EntityType in OData is a structured type with a key that represents a business entity\\n(e.g. `Customer`, `Order`, `Employee`). This maps to:\\n- `edmx` (OData v2/v4 CSDL XML): targets `<EntityType Name=\\"...\\">` elements in the Schema.\\n- `csdl-json` (OData v4 CSDL JSON): targets elements with `$Kind: \\"EntityType\\"`.\\n\\nMUST use the namespace-qualified name (e.g. `OData.Demo.Customer`) for unambiguous resolution.\\nFor EntitySet-level patching (Capabilities annotations), use the [`entitySet`](#overlay-selector-by-entity-set) selector instead.\\n\\nFor CSN Interop targets (`sap-csn-interop-effective-v1`), this selector targets a `definitions`\\nentry by its fully qualified key (e.g. `AirlineService.Airline`).\\n\\nTo target ComplexType or EnumType elements, use the dedicated `complexType` or `enumType` selectors.","examples":["OData.Demo.Customer","OData.Demo.LeaveRequest","AirlineService.Airline"]}},"examples":[{"entityType":"OData.Demo.Customer"},{"entityType":"AirlineService.Airline"}]},"OverlaySelectorByComplexType":{"type":"object","title":"Overlay Selector By Complex Type","x-ums-type":"embedded","additionalProperties":false,"required":["complexType"],"properties":{"complexType":{"type":"string","minLength":1,"description":"**OData-specific** selector targeting a ComplexType element by its namespace-qualified name.\\n\\nA ComplexType in OData is a structured type without a key, typically used for reusable\\nembedded structures like addresses, coordinates, or measurement values. This maps to:\\n- `edmx` (OData v2/v4 CSDL XML): targets `<ComplexType Name=\\"...\\">` elements in the Schema.\\n- `csdl-json` (OData v4 CSDL JSON): targets elements with `$Kind: \\"ComplexType\\"`.\\n\\nMUST use the namespace-qualified name (e.g. `OData.Demo.Address`) for unambiguous resolution.\\n\\nComplexTypes are often shared across multiple EntityTypes, so patching a ComplexType\\naffects all usages of that type throughout the service.","examples":["OData.Demo.Address","OData.Demo.GeoLocation","API_BUSINESS_PARTNER.A_AddressEmailAddress"]}},"examples":[{"complexType":"OData.Demo.Address"}]},"OverlaySelectorByEnumType":{"type":"object","title":"Overlay Selector By Enum Type","x-ums-type":"embedded","additionalProperties":false,"required":["enumType"],"properties":{"enumType":{"type":"string","minLength":1,"description":"**OData-specific** selector targeting an EnumType element by its namespace-qualified name.\\n\\nAn EnumType in OData is an enumeration type with named members representing a fixed set\\nof values (e.g. `OrderStatus`, `Priority`, `Gender`). This maps to:\\n- `edmx` (OData v2/v4 CSDL XML): targets `<EnumType Name=\\"...\\">` elements in the Schema.\\n- `csdl-json` (OData v4 CSDL JSON): targets elements with `$Kind: \\"EnumType\\"`.\\n\\nMUST use the namespace-qualified name (e.g. `OData.Demo.OrderStatus`) for unambiguous resolution.\\n\\nTo patch individual enum members, use the [`propertyType`](#overlay-selector-by-property-type) selector with this `enumType` as context.","examples":["OData.Demo.OrderStatus","OData.Demo.Priority","SAP.Common.ApprovalStatus"]}},"examples":[{"enumType":"OData.Demo.OrderStatus"}]},"OverlaySelectorByPropertyType":{"type":"object","title":"Overlay Selector By Property Type","x-ums-type":"embedded","additionalProperties":false,"required":["propertyType"],"properties":{"propertyType":{"type":"string","minLength":1,"description":"Concept-level property, navigation property, or enum member identifier.\\n\\nUse the unqualified property name (e.g. `BirthDate`, `Street`, `Pending`).\\nProperty names are frequently reused across types, so a parent type context\\nMUST be provided via exactly one of: `entityType`, `complexType`, or `enumType`.\\n\\nSupported metadata formats:\\n- `edmx` (OData v2/v4 CSDL XML): targets a Property or NavigationProperty on an EntityType\\n  or ComplexType; or a Member on an EnumType.\\n- `csdl-json` (OData v4 CSDL JSON): targets non-`$`-prefixed keys on the matched type object.\\n- `sap-csn-interop-effective-v1` (CSN Interop): targets an entry in the `elements` map of\\n  the matched entity definition. Use `entityType` for CSN Interop targets.","examples":["BirthDate","Street","Pending","AirlineID"]},"entityType":{"type":"string","minLength":1,"description":"Parent EntityType context for the property.\\nUse this when targeting a property on an EntityType.\\nMUST be the namespace-qualified name (e.g. `OData.Demo.Customer`).\\nFor CSN Interop: the fully qualified `definitions` key (e.g. `AirlineService.Airline`).\\n\\nExactly one of `entityType`, `complexType`, or `enumType` MUST be provided.","examples":["OData.Demo.Customer","AirlineService.Airline"]},"complexType":{"type":"string","minLength":1,"description":"**OData-specific** parent ComplexType context for the property.\\nUse this when targeting a property on a ComplexType.\\nMUST be the namespace-qualified name (e.g. `OData.Demo.Address`).\\n\\nExactly one of `entityType`, `complexType`, or `enumType` MUST be provided.","examples":["OData.Demo.Address","OData.Demo.GeoLocation"]},"enumType":{"type":"string","minLength":1,"description":"**OData-specific** parent EnumType context for the enum member.\\nUse this when targeting a member of an EnumType.\\nMUST be the namespace-qualified name (e.g. `OData.Demo.OrderStatus`).\\n\\nExactly one of `entityType`, `complexType`, or `enumType` MUST be provided.","examples":["OData.Demo.OrderStatus","OData.Demo.Priority"]}},"examples":[{"propertyType":"BirthDate","entityType":"OData.Demo.Customer"},{"propertyType":"Street","complexType":"OData.Demo.Address"},{"propertyType":"Pending","enumType":"OData.Demo.OrderStatus"}]},"OverlaySelectorByEntitySet":{"type":"object","title":"Overlay Selector By Entity Set","x-ums-type":"embedded","additionalProperties":false,"required":["entitySet"],"properties":{"entitySet":{"type":"string","minLength":1,"description":"Concept-level entity set identifier.\\nSupported metadata formats:\\n- `edmx` (OData v2/v4 CSDL XML): targets an EntitySet element inside EntityContainer.\\n  May use the unqualified name (e.g. `Customers`) or namespace-prefixed name.\\n- `csdl-json` (OData v4 CSDL JSON): targets a key with `$Collection: true` inside the\\n  EntityContainer object in the namespace.\\n\\nUse `entitySet` when you need to patch EntityContainer-bound metadata such as\\nCapabilities annotations (InsertRestrictions, UpdateRestrictions, etc.).\\nFor patching the EntityType structure (Properties, NavigationProperties), use `entityType`.","examples":["Customers","SalesOrders","EmployeeSet"]}}},"OverlaySelectorByNamespace":{"type":"object","title":"Overlay Selector By Namespace","x-ums-type":"embedded","additionalProperties":false,"required":["namespace"],"properties":{"namespace":{"type":"string","minLength":1,"description":"Concept-level OData schema/namespace selector.\\nSupported metadata formats:\\n- `edmx` (OData v2/v4 CSDL XML): targets the `<Schema Namespace=\\"...\\">` element.\\n  Use the namespace value exactly as declared (e.g. `com.example.OrderService`).\\n- `csdl-json` (OData v4 CSDL JSON): targets the namespace-level object (the non-`$`-prefixed\\n  key in the CSDL JSON document that matches the namespace value).\\n\\nUse this selector for service/schema-level annotations such as `@Core.Description` and\\n`@Core.LongDescription` on the OData service as a whole.","examples":["com.example.OrderService","SFSF.EC.Compensation","API_BUSINESS_PARTNER"]}}},"OverlaySelectorByParameter":{"type":"object","title":"Overlay Selector By Parameter","x-ums-type":"embedded","additionalProperties":false,"required":["parameter","operation"],"properties":{"parameter":{"type":"string","minLength":1,"description":"Concept-level parameter name.\\nSupported metadata formats:\\n- `edmx` (OData v2/v4 CSDL XML): targets a `<Parameter Name=\\"...\\">` child element on\\n  an Action, Function, or FunctionImport. Use the unqualified parameter name.\\n- `csdl-json` (OData v4 CSDL JSON): targets an entry in the `$Parameter` array of an\\n  Action/Function overload whose `$Name` matches.\\n- OpenAPI (`openapi-v2`, `openapi-v3`, `openapi-v3.1+`): targets an entry in the\\n  `parameters` array of the operation identified by `operation` (operationId), matching\\n  by the parameter `name` field.\\n\\n`operation` MUST always accompany this field to unambiguously identify the owning operation.","examples":["employeeId","Count","filter"]},"operation":{"type":"string","minLength":1,"description":"Required operation context for the selected parameter.\\n- For OData: the namespace-qualified Action, Function, or FunctionImport name.\\n- For OpenAPI: the `operationId` of the HTTP operation.","examples":["com.example.Svc.TerminateEmployee","getConstellationByAbbreviation"]}}},"OverlaySelectorByReturnType":{"type":"object","title":"Overlay Selector By Return Type","x-ums-type":"embedded","additionalProperties":false,"required":["returnType","operation"],"properties":{"returnType":{"type":"boolean","const":true,"description":"Flag indicating that the return type of the specified operation is the target.\\nMUST be `true`. Use `operation` to identify the owning operation.\\nSupported metadata formats:\\n- `edmx` (OData v2/v4 CSDL XML): targets the `<ReturnType>` child element of the\\n  matched Action or Function element.\\n- `csdl-json` (OData v4 CSDL JSON): targets the `$ReturnType` object inside the matched\\n  Action/Function overload array entry."},"operation":{"type":"string","minLength":1,"description":"Namespace-qualified Action or Function name whose ReturnType is targeted.\\n- For `edmx`: the namespace-qualified name of the Action or Function (e.g. `com.example.Svc.TerminateEmployee`).\\n- For `csdl-json`: the namespace-qualified name looked up in the Namespace object.","examples":["com.example.Svc.TerminateEmployee","com.example.Svc.GetDirectReports"]}}},"OverlayPatchValue":{"type":["object","array","string","number","boolean","null"],"title":"Overlay Patch Value","x-ums-type":"embedded","description":"The value used by the patch `action`.\\nStructure depends on the target being patched and the action type.\\n\\nFor OData targets (`edmx`, `csdl-json`), the value MUST be expressed in CSDL JSON\\nannotation format. Annotation keys use the `@TermName` convention:\\ne.g. `{ \\"@Core.Description\\": \\"...\\", \\"@Core.Revisions\\": [...] }`.\\nWhen the target is EDMX XML, the merge implementation converts this to `<Annotation>` elements.\\nSee: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html\\n\\nFor CSN Interop targets (`sap-csn-interop-effective-v1`), the value is plain CSN JSON\\nmerged directly into the matched entity definition or element object.\\nUse the CSN `doc` field for human-readable descriptions, and `@AnnotationName` keys\\nfor vocabulary annotations (e.g. `@EndUserText.label`, `@Semantics.text`).\\nSee: https://sap.github.io/csn-interop-specification/"},"OverlaySystemInstance":{"type":"object","title":"Overlay System Instance","x-ums-type":"ignore","description":"A [system instance](../../spec-v1/index.md#system-instance) is a concrete, running instance of a system type.\\nThis object is identical to the ORD Document `describedSystemInstance` object; see [System Instance](../../spec-v1/interfaces/Document.md#system-instance).\\n\\nIts purpose is to link the overlay to the same system landscape model as ORD resources, if needed.\\nUsually this is not necessary for static overlays if the patched resource is already selected via ORD ID.","properties":{"baseUrl":{"type":"string","format":"uri-reference","description":"Optional [base URL](../../spec-v1/index.md#base-url) of the system instance.\\nBy providing the base URL, relative URLs in the overlay are resolved relative to it.","pattern":"^http[s]?:\\\\/\\\\/[^:\\\\/\\\\s]+\\\\.[^:\\\\/\\\\s\\\\.]+(:\\\\d+)?(\\\\/[a-zA-Z0-9-\\\\._~]+)*$","examples":["https://example-sap-system.com","https://sub.foo.bar.com/api/v1"]},"localId":{"type":"string","description":"Optional local ID for the system instance (usually tenant ID), as known by the described system.","maxLength":255,"examples":["LocalTenantId123"]},"correlationIds":{"type":"array","description":"Correlation IDs for linking this system instance to external systems of record.","minItems":1,"items":{"type":"string","title":"Overlay Correlation ID","x-ums-type":"ignore","description":"Correlation ID identifying related records in external systems of record.\\nMUST be a valid [Correlation ID](../../spec-v1/index.md#correlation-id).","pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\\\-\\\\/]+):([a-zA-Z0-9._\\\\-\\\\/]+)$","maxLength":255},"examples":[["sap.cld:tenant:741234567"]]}},"additionalProperties":false},"OverlaySystemType":{"type":"object","title":"Overlay System Type","x-ums-type":"ignore","description":"A [system type](../../spec-v1/index.md#system-type) is the abstract type of an application or service, from operational perspective.\\nThis object is identical to the ORD Document `describedSystemType` object; see [System Type](../../spec-v1/interfaces/Document.md#system-type).\\n\\nIts purpose is to link the overlay to the same system landscape model as ORD resources, if needed.\\nUsually this is not necessary for static overlays if the patched resource is already selected via ORD ID.","properties":{"systemNamespace":{"type":"string","description":"The [system namespace](../../spec-v1/index.md#system-namespace) is a unique identifier for the system type.","pattern":"^[a-z0-9]+(?:[.][a-z0-9]+){1}$","maxLength":32,"examples":["sap.s4","sap.c4c","sap.cld"]},"correlationIds":{"type":"array","description":"Correlation IDs for linking this system type to external systems of record.","minItems":1,"items":{"type":"string","title":"Overlay Correlation ID","x-ums-type":"ignore","description":"Correlation ID identifying related records in external systems of record.\\nMUST be a valid [Correlation ID](../../spec-v1/index.md#correlation-id).","pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\\\-\\\\/]+):([a-zA-Z0-9._\\\\-\\\\/]+)$","maxLength":255},"examples":[["sap.cld:systemRole:S4_PC"]]}},"additionalProperties":false},"OverlaySystemVersion":{"type":"object","title":"Overlay System Version","x-ums-type":"ignore","description":"A [system version](../../spec-v1/index.md#system-version) describes a version/release of the system.\\nThis object is identical to the ORD Document `describedSystemVersion` object; see [System Version](../../spec-v1/interfaces/Document.md#system-version).\\n\\nIts purpose is to link the overlay to the same system landscape model as ORD resources, if needed.\\nUsually this is not necessary for static overlays if the patched resource is already selected via ORD ID.","properties":{"version":{"type":"string","description":"The version of the system instance (run-time) or the version of the described system-version perspective.\\n\\nIt MUST follow the [Semantic Versioning 2.0.0](https://semver.org/) standard.","pattern":"^(0|[1-9]\\\\d*)\\\\.(0|[1-9]\\\\d*)\\\\.(0|[1-9]\\\\d*)(?:-((?:0|[1-9]\\\\d*|\\\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\\\.(?:0|[1-9]\\\\d*|\\\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\\\+([0-9a-zA-Z-]+(?:\\\\.[0-9a-zA-Z-]+)*))?$","examples":["1.2.3","2024.8.0"]},"title":{"type":"string","minLength":1,"maxLength":255,"description":"Human-readable title of the system version.","examples":["SAP S/4HANA Cloud 2408"]},"correlationIds":{"type":"array","description":"Correlation IDs for linking this system version to external systems of record.","minItems":1,"items":{"type":"string","title":"Overlay Correlation ID","x-ums-type":"ignore","description":"Correlation ID identifying related records in external systems of record.\\nMUST be a valid [Correlation ID](../../spec-v1/index.md#correlation-id).","pattern":"^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\\\-\\\\/]+):([a-zA-Z0-9._\\\\-\\\\/]+)$","maxLength":255},"examples":[["sap.cld:release:2408"]]}},"additionalProperties":false}}}'),d=e=>{e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!1,enableSchemaRequest:!1,schemaRequest:"ignore",schemas:[{uri:"https://open-resource-discovery.org/spec-v1/interfaces/OrdOverlay.schema.json",schema:c}]})};function p({value:e,onChange:t,readOnly:r=!1,language:o="json",height:i="100%",highlightLines:c}){let{resolvedTheme:m}=(0,s.D)(),y=(0,n.useRef)(null),h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=y.current;if(!e)return;let t=e.getModel()?.getLineCount()??0,r=(c??[]).filter(e=>e>=1&&e<=t).map(e=>({range:{startLineNumber:e,startColumn:1,endLineNumber:e,endColumn:1},options:{isWholeLine:!0,className:"target-highlight-line",marginClassName:"target-highlight-margin"}}));h.current?h.current.set(r):h.current=e.createDecorationsCollection(r)},[c,e]),(0,a.jsx)(l.Ay,{height:i,language:o,value:e,onChange:t,beforeMount:d,onMount:e=>{y.current=e},options:{readOnly:r,minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:13,tabSize:2,wordWrap:"on",automaticLayout:!0},theme:"dark"===m?"vs-dark":"light"})}r(7356);var m=r(1934),y=r(36420);let h={rawJson:"",parsedOverlay:null,lastValidOverlay:null,parseError:null,isDirty:!1,setRawJson:()=>{},reset:()=>{}},u=(0,m.v)(e=>({...h,setRawJson:t=>{let{overlay:r,error:a}=function(e){if(!e.trim())return{overlay:null,error:null};try{let t=function(e){let t;if(e){if("{"===e.charAt(0))try{t=JSON.parse(e)}catch(e){console.error(e);return}else try{t=(0,y.qg)(e)}catch(e){console.error(e);return}if(t&&"object"==typeof t)return t}}(e);if(!t)return{overlay:null,error:"Invalid JSON or YAML"};if("string"!=typeof t.ordOverlay)return{overlay:null,error:"Document is missing the required `ordOverlay` field."};return{overlay:t,error:null}}catch(e){return{overlay:null,error:e instanceof Error?e.message:"Invalid overlay document"}}}(t);e(e=>({rawJson:t,parsedOverlay:r,parseError:a,isDirty:!0,lastValidOverlay:r??e.lastValidOverlay}))},reset:()=>e({rawJson:"",parsedOverlay:null,lastValidOverlay:null,parseError:null,isDirty:!1})})),v=e=>e.parsedOverlay,f=e=>e.parseError,g={kind:"overview"},x={kind:"target"},b=e=>({kind:"patch",index:e});function O(e){switch(e.kind){case"overview":return"overview";case"target":return"target";case"patch":return`patch-${e.index}`}}function S(e){if("overview"===e)return g;if("target"===e)return x;let t=/^patch-(\d+)$/.exec(e);if(t)return b(Number(t[1]))}function j(e,t){return e.kind===t.kind&&("patch"!==e.kind||"patch"!==t.kind||e.index===t.index)}function w({sidebar:e,toolbar:t,children:r,contentRef:n}){return(0,a.jsxs)("div",{className:"overlay-shell",children:[t,e,(0,a.jsx)("main",{ref:n,className:"overlay-main-content",children:r})]})}var D=r(65377);function T(e){if(e.root)return{kind:"root",value:"whole document"};if(e.jsonPath)return{kind:"jsonPath",value:e.jsonPath};if(e.operation&&e.parameter)return{kind:"parameter",value:e.parameter,context:`in operation ${e.operation}`};if(e.operation&&e.returnType)return{kind:"returnType",value:"return type",context:`of operation ${e.operation}`};if(e.operation)return{kind:"operation",value:e.operation};if(e.propertyType){let t=e.entityType??e.complexType??e.enumType??"?";return{kind:"propertyType",value:e.propertyType,context:`on ${t}`}}return e.entityType?{kind:"entityType",value:e.entityType}:e.complexType?{kind:"complexType",value:e.complexType}:e.enumType?{kind:"enumType",value:e.enumType}:e.entitySet?{kind:"entitySet",value:e.entitySet}:e.namespace?{kind:"namespace",value:e.namespace}:{kind:"unknown",value:JSON.stringify(e)}}function N(e){switch(e){case"update":return"default";case"merge":return"success";case"remove":return"destructive"}}function k(e){switch(e){case"public":return"success";case"internal":return"warning";case"private":return"destructive"}}function C(e){let t=document.getElementById(O(e));return!!t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),!0)}let I="u">typeof navigator&&/Mac|iPad|iPhone|iPod/.test(navigator.platform),A=I?"⌘ K":"^ K";function P(e,t){if(!t)return e;let r=e.toLowerCase().indexOf(t.toLowerCase());if(-1===r)return e;let n=r+t.length;return(0,a.jsxs)(a.Fragment,{children:[e.slice(0,r),(0,a.jsx)("mark",{className:"overlay-sidebar-hit",children:e.slice(r,n)}),e.slice(n)]})}function E(e,t){return!t||e.primary.toLowerCase().includes(t)||e.secondary?.toLowerCase().includes(t)===!0||e.action?.includes(t)===!0}function R({overlay:e,activeSection:t,onSectionChange:r,scrollRootRef:o,useScrollRoot:s}){var l;let c,{meta:d,patches:p}=(0,n.useMemo)(()=>{let t;return t=[{section:g,primary:"Overview"}],e.target&&t.push({section:x,primary:"Target"}),{meta:t,patches:(e.patches??[]).map((e,t)=>{let r=T(e.selector);return{section:b(t),primary:r.value,secondary:r.kind,action:e.action}})}},[e]),[m,y]=(0,n.useState)(""),h=(0,n.useRef)(null),u=(0,n.useCallback)(()=>y(""),[]);(0,n.useEffect)(()=>{let e=e=>{if((I?e.metaKey:e.ctrlKey)&&("k"===e.key||"K"===e.key)){e.preventDefault(),h.current?.focus(),h.current?.select();return}"Escape"===e.key&&document.activeElement===h.current&&(u(),h.current?.blur())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h,u]),l=(0,n.useMemo)(()=>[...d,...p].map(e=>O(e.section)),[d,p]),c=(0,n.useRef)(t),(0,n.useEffect)(()=>{c.current=t},[t]),(0,n.useEffect)(()=>{let e=l.map(e=>document.getElementById(e)).filter(e=>null!==e);if(0===e.length)return;let t=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0];if(!t)return;let a=S(t.target.id);a&&!j(a,c.current)&&r(a)},{root:s?o.current:null,rootMargin:"-20% 0px -60% 0px",threshold:0});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[l,r,o,s]),(0,n.useEffect)(()=>{let e=`#${O(t)}`;window.location.hash!==e&&history.replaceState(null,"",e)},[t]);let v=m.trim().toLowerCase(),f=d.filter(e=>E(e,v)),w=p.filter(e=>E(e,v)),N=""!==v&&0===f.length&&0===w.length,k=(0,n.useCallback)(e=>t=>{C(e)&&(t.preventDefault(),r(e))},[r]);return(0,a.jsx)("aside",{className:"overlay-sidebar",children:(0,a.jsxs)("div",{className:"overlay-sidebar-inner",children:[(0,a.jsx)("div",{className:"overlay-sidebar-header",children:(0,a.jsxs)("div",{className:"overlay-sidebar-search",children:[(0,a.jsx)(D.A,{size:14,"aria-hidden":!0,className:"overlay-sidebar-search-icon"}),(0,a.jsx)(i.pd,{ref:h,type:"search",placeholder:"Search",value:m,onChange:e=>y(e.target.value),className:"overlay-sidebar-search-input","aria-label":"Search overlay"}),(0,a.jsx)("kbd",{className:"overlay-sidebar-kbd",children:A})]})}),(0,a.jsxs)("nav",{"aria-label":"Overlay navigation",className:"overlay-sidebar-nav",children:[f.length>0?(0,a.jsx)("ul",{className:"overlay-sidebar-list",children:f.map(e=>(0,a.jsx)(M,{entry:e,isActive:j(e.section,t),query:m,onClick:k(e.section),plain:!0},O(e.section)))}):null,w.length>0?(0,a.jsxs)("div",{className:"overlay-sidebar-group",children:[(0,a.jsx)("p",{className:"overlay-sidebar-group-title",children:"Patches"}),(0,a.jsx)("ul",{className:"overlay-sidebar-list",children:w.map(e=>(0,a.jsx)(M,{entry:e,isActive:j(e.section,t),query:m,onClick:k(e.section)},O(e.section)))})]}):null,N?(0,a.jsxs)("div",{className:"overlay-sidebar-empty",children:["No matches for “",m,"”"]}):null]}),(0,a.jsx)(L,{ordOverlay:e.ordOverlay,className:"overlay-sidebar-footer-desktop"})]})})}function L({ordOverlay:e,className:t,style:r}){return(0,a.jsxs)("footer",{className:(0,i.cn)("overlay-sidebar-footer",t),style:r,children:[(0,a.jsxs)("span",{children:["ORD Overlay ",e]}),(0,a.jsx)("span",{"aria-hidden":!0,className:"overlay-sidebar-footer-spacer"}),(0,a.jsx)("a",{href:"https://open-resource-discovery.org",target:"_blank",rel:"noreferrer",children:"open-resource-discovery.org"})]})}function M({entry:e,isActive:t,query:r,onClick:n,plain:o}){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:`#${O(e.section)}`,onClick:n,className:(0,i.cn)("overlay-sidebar-item",o&&"overlay-sidebar-item-plain",t&&"overlay-sidebar-item-active"),children:e.action?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:(0,i.cn)("overlay-sidebar-method",`overlay-sidebar-method-${N(e.action)}`),children:e.action.toUpperCase()}),(0,a.jsx)("span",{className:"overlay-sidebar-item-label",children:P(e.primary,r)})]}):P(e.primary,r)})})}var z=r(50825),U=r(64577),$=r(99314),B=r(1275);async function q(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function J({overlay:e,rawContent:t,currentSectionLabel:r}){let[o,s]=(0,n.useState)(!1),l=(0,n.useMemo)(()=>(function(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}})(t),[t]),c=async()=>{await q(t)&&(s(!0),setTimeout(()=>s(!1),1500))};return(0,a.jsxs)("header",{className:"overlay-toolbar",children:[(0,a.jsx)("div",{className:"overlay-toolbar-left",children:(0,a.jsx)("span",{className:"overlay-toolbar-section",title:r,children:r})}),(0,a.jsxs)("div",{className:"overlay-toolbar-actions",children:[(0,a.jsxs)(i.$n,{variant:"ghost",size:"sm",onClick:()=>{var t;let r,a,n,o;r=(e.ordId??"overlay").replace(/[^a-z0-9.-]+/gi,"-").replace(/^-+|-+$/g,""),t=`${r}.overlay.json`,a=new Blob([l],{type:"application/json"}),n=URL.createObjectURL(a),(o=document.createElement("a")).href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(n)},"aria-label":"Download overlay",children:[(0,a.jsx)(z.A,{size:14,"aria-hidden":!0}),(0,a.jsx)("span",{children:"Download"})]}),(0,a.jsxs)(i.$n,{variant:"ghost",size:"sm",onClick:c,"aria-label":"Copy raw overlay",children:[o?(0,a.jsx)(U.A,{size:14,"aria-hidden":!0}):(0,a.jsx)($.A,{size:14,"aria-hidden":!0}),(0,a.jsx)("span",{children:o?"Copied":"Copy"})]}),(0,a.jsxs)("a",{href:"https://github.com/open-resource-discovery/specification/blob/main/spec/v1/OrdOverlay.schema.yaml",target:"_blank",rel:"noreferrer",className:"overlay-toolbar-link","aria-label":"Open ORD Overlay specification",children:[(0,a.jsx)("span",{children:"Spec"}),(0,a.jsx)(B.A,{size:12,"aria-hidden":!0})]})]})]})}function F({children:e}){return(0,a.jsx)("code",{className:"font-mono text-sm",children:e})}function _({label:e,children:t}){return(0,a.jsxs)("div",{className:"overlay-target-row",children:[(0,a.jsx)("span",{className:"overlay-target-label",children:e}),(0,a.jsx)("span",{className:"overlay-target-value",children:t})]})}function Z({overlay:e}){return(0,a.jsxs)(i.Zp,{children:[(0,a.jsxs)(i.Zp.Header,{children:[(0,a.jsx)(i.Zp.Title,{children:"Provenance"}),(0,a.jsx)(i.Zp.Description,{children:"How this overlay is identified and scoped."})]}),(0,a.jsx)(i.Zp.Content,{children:(0,a.jsxs)("dl",{className:"overlay-target-rows",children:[(0,a.jsx)(_,{label:"Spec",children:(0,a.jsxs)(F,{children:["ORD Overlay ",e.ordOverlay]})}),e.visibility?(0,a.jsx)(_,{label:"Visibility",children:(0,a.jsx)(i.Ex,{variant:k(e.visibility),size:"sm",className:"uppercase",children:e.visibility})}):null,e.perspective?(0,a.jsx)(_,{label:"Perspective",children:(0,a.jsx)(F,{children:e.perspective})}):null]})})]})}function V({overlay:e}){let t=e.ordId??"ORD Overlay";return(0,a.jsxs)("section",{id:"overview",className:"overlay-section overlay-hero",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"overlay-hero-badges",children:[(0,a.jsxs)(i.Ex,{variant:"highlight",size:"sm",children:["v",e.ordOverlay]}),e.visibility?(0,a.jsx)(i.Ex,{variant:k(e.visibility),size:"sm",className:"uppercase",children:e.visibility}):null,e.perspective?(0,a.jsx)(i.Ex,{variant:"secondary",size:"sm",children:e.perspective}):null]}),(0,a.jsx)("h1",{className:"overlay-hero-title",children:t})]}),(0,a.jsxs)("div",{className:"overlay-hero-columns",children:[(0,a.jsx)("div",{className:"overlay-hero-main",children:e.description?(0,a.jsx)("div",{className:"overlay-hero-description",children:(0,a.jsx)(i.Rb,{text:e.description})}):null}),(0,a.jsx)("div",{className:"overlay-hero-side",children:(0,a.jsx)(Z,{overlay:e})})]})]})}var H=r(17494);function W({target:e}){return e.ordId||e.url||e.definitionType||e.correlationIds?.length?(0,a.jsxs)("section",{id:"target",className:"overlay-section",children:[(0,a.jsx)("header",{className:"overlay-section-header",children:(0,a.jsxs)("div",{className:"overlay-section-header-left",children:[(0,a.jsx)(H.A,{size:18,"aria-hidden":!0}),(0,a.jsx)("h2",{className:"overlay-section-title",children:"Target"})]})}),(0,a.jsxs)(i.Zp,{className:"overlay-target-card",children:[(0,a.jsx)(i.Zp.Header,{children:(0,a.jsx)(i.Zp.Description,{children:"Identifies the resource or definition file this overlay patches."})}),(0,a.jsxs)(i.Zp.Content,{className:"overlay-target-rows",children:[e.ordId?(0,a.jsx)(_,{label:"ORD ID",children:(0,a.jsx)(F,{children:e.ordId})}):null,e.definitionType?(0,a.jsx)(_,{label:"Definition type",children:(0,a.jsx)(F,{children:e.definitionType})}):null,e.url?(0,a.jsx)(_,{label:"URL",children:(0,a.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-primary hover:underline break-all",children:[(0,a.jsx)("span",{className:"font-mono text-sm",children:e.url}),(0,a.jsx)(B.A,{size:14,"aria-hidden":!0})]})}):null,e.correlationIds&&e.correlationIds.length>0?(0,a.jsx)(_,{label:"Correlation IDs",children:(0,a.jsx)("span",{className:"flex flex-wrap gap-1",children:e.correlationIds.map(e=>(0,a.jsx)("code",{className:"font-mono text-xs bg-muted px-1.5 py-0.5 rounded",children:e},e))})}):null]})]})]}):null}var X=r(53896),K=r(65342);function Y({selector:e}){return(0,a.jsxs)("span",{className:"overlay-selector inline-flex items-center gap-2 min-w-0",children:[(0,a.jsx)(i.Ex,{variant:"outline",size:"sm",className:"overlay-selector-kind uppercase tracking-wide",children:e.kind}),(0,a.jsx)("code",{className:"overlay-selector-value font-mono text-sm text-foreground truncate",children:e.value}),e.context?(0,a.jsx)("span",{className:"overlay-selector-context text-xs text-muted-foreground truncate",children:e.context}):null]})}let G=null,Q={update:{label:"Replacement value",filename:"replacement.yaml"},merge:{label:"Merge payload",filename:"merge-payload.yaml"},remove:{label:"Removal mask",filename:"removal-mask.yaml"}};function ee({patch:e}){let t=function(){let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{let e=!1;return(!G&&(G=r.e(3658).then(r.bind(r,53658)).then(({createHighlighter:e})=>e({themes:["github-light","github-dark"],langs:["yaml","json"]}))),G).then(r=>{e||t(r)}),()=>{e=!0}},[]),e}(),{action:o,data:s}=e;if("remove"===o&&void 0===s)return(0,a.jsxs)("div",{className:"overlay-callout overlay-callout-destructive",children:["This patch ",(0,a.jsx)("strong",{children:"removes"})," the entire selected element."]});if(void 0===s)return null;let{label:l,filename:c}=Q[o];return(0,a.jsxs)("section",{className:"overlay-field",children:[(0,a.jsxs)("header",{className:"overlay-field-header",children:[(0,a.jsx)("h4",{className:"overlay-field-label",children:l}),(0,a.jsx)(i.Ex,{variant:"remove"===o?"destructive":"outline",size:"sm",className:"uppercase",children:o})]}),(0,a.jsx)(i.NG,{code:function(e){try{return(0,y.As)(e)}catch{return JSON.stringify(e,null,2)}}(s),language:"yaml",filename:c,highlighter:t,lightTheme:"github-light",darkTheme:"github-dark",maxHeight:"320px"})]})}function et({patch:e,index:t,defaultOpen:r}){let n=T(e.selector),o=e.action;return(0,a.jsx)("div",{id:`patch-${t}`,className:"overlay-patch-anchor",children:(0,a.jsxs)(i.iV.Root,{bordered:!0,defaultOpen:r,className:"overlay-patch",children:[(0,a.jsx)(i.iV.Trigger,{className:"overlay-patch-trigger",badges:(0,a.jsx)(i.Ex,{variant:N(o),className:"uppercase tracking-wide",children:o}),children:(0,a.jsxs)("span",{className:"overlay-patch-label",children:[(0,a.jsxs)("span",{className:"text-xs uppercase tracking-wide text-muted-foreground",children:["Patch #",t+1]}),(0,a.jsx)(Y,{selector:n})]})}),(0,a.jsxs)(i.iV.Content,{className:"overlay-patch-body",children:[(0,a.jsxs)("div",{className:"overlay-patch-col overlay-patch-col-details",children:[e.description?(0,a.jsxs)("section",{className:"overlay-field",children:[(0,a.jsx)("h4",{className:"overlay-field-label",children:"Description"}),(0,a.jsx)(i.Rb,{text:e.description})]}):null,e.tags&&e.tags.length>0?(0,a.jsxs)("section",{className:"overlay-field overlay-tags",children:[(0,a.jsx)("h4",{className:"overlay-field-label",children:"Tags"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(e=>(0,a.jsx)(i.Ex,{variant:"secondary",size:"sm",children:e},e))})]}):null]}),(0,a.jsx)("div",{className:"overlay-patch-col overlay-patch-col-payload",children:(0,a.jsx)(ee,{patch:e})})]})]})})}function er({patches:e}){let[t,r]=(0,n.useState)(!0);return(0,a.jsxs)("section",{id:"patches",className:"overlay-section",children:[(0,a.jsx)(ea,{patches:e,allExpanded:t,onToggleAll:()=>r(e=>!e)}),0===e.length?(0,a.jsx)("div",{className:"overlay-callout",children:"This overlay defines no patches."}):(0,a.jsx)("div",{className:"overlay-patch-list",children:e.map((e,r)=>(0,a.jsx)(et,{patch:e,index:r,defaultOpen:t},r))},String(t))]})}function ea({patches:e,allExpanded:t,onToggleAll:r}){let n=e.length>1;return(0,a.jsxs)("header",{className:"overlay-section-header",children:[(0,a.jsxs)("div",{className:"overlay-section-header-left",children:[(0,a.jsx)("h2",{className:"overlay-section-title",children:"Patches"}),(0,a.jsx)(i.Ex,{variant:"secondary",size:"sm",children:e.length})]}),n?(0,a.jsxs)(i.$n,{variant:"ghost",size:"sm",onClick:r,"aria-label":t?"Collapse all patches":"Expand all patches",children:[t?(0,a.jsx)(X.A,{size:14,"aria-hidden":!0}):(0,a.jsx)(K.A,{size:14,"aria-hidden":!0}),(0,a.jsx)("span",{children:t?"Collapse all":"Expand all"})]}):null]})}let en="navigation-with-keyboard";function eo(){let e=u(v),t=u(e=>e.rawJson),r=u(f),{resolvedTheme:o}=(0,s.D)(),[l,c]=(0,n.useState)(g),[d,p]=(0,n.useState)(null),[m,y]=(0,n.useState)(null),h=(0,n.useRef)(null),x=(0,n.useRef)(null);(0,n.useEffect)(()=>{if("u"<typeof document)return;let e=e=>{"Tab"===e.key&&document.body.classList.add(en)},t=()=>document.body.classList.remove(en);return window.addEventListener("keydown",e),window.addEventListener("mousedown",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("mousedown",t)}},[]),(0,n.useEffect)(()=>{let e=window.location.hash.replace(/^#/,"");if(!e)return;let t=S(e);if(!t)return;let r=requestAnimationFrame(()=>{C(t)&&c(t)});return()=>cancelAnimationFrame(r)},[c]),(0,n.useEffect)(()=>{let e=h.current;if(!e)return;let t=t=>{let r=e.getBoundingClientRect(),a=(t??r.width)>=720;if(y(e=>e===a?e:a),a)return void p(null);let{left:n,width:o}=r;p(e=>e?.left===n&&e.width===o?e:{left:n,width:o})},r=new ResizeObserver(e=>{t(e[0]?.contentRect.width)}),a=()=>t();return r.observe(e),t(),window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),()=>{r.disconnect(),window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0)}},[e]);let b=(0,i.cn)("ord-ui","text-foreground","overlay-root","dark"===o&&"dark");if(!e)return(0,a.jsx)("div",{ref:h,className:b,children:(0,a.jsxs)("div",{className:"overlay-fatal",children:[(0,a.jsx)("h1",{children:"Invalid Overlay"}),(0,a.jsx)("p",{children:r??"Document is missing the required `ordOverlay` field."})]})});let O=e.patches??[];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:h,className:b,children:(0,a.jsx)(i.m_.Provider,{children:(0,a.jsxs)(w,{contentRef:x,toolbar:(0,a.jsx)(J,{overlay:e,rawContent:t,currentSectionLabel:function(e,t){switch(e.kind){case"overview":return"Overview";case"target":return"Target";case"patch":{let r=t[e.index];return r?`${r.action.toUpperCase()} \xb7 patch #${e.index+1}`:`Patch #${e.index+1}`}}}(l,O)}),sidebar:(0,a.jsx)(R,{overlay:e,activeSection:l,onSectionChange:c,scrollRootRef:x,useScrollRoot:!0===m}),children:[(0,a.jsx)(V,{overlay:e}),e.target?(0,a.jsx)(W,{target:e.target}):null,(0,a.jsx)(er,{patches:O})]})})}),d?(0,a.jsx)(L,{ordOverlay:e.ordOverlay,className:(0,i.cn)("ord-ui","text-foreground","overlay-sidebar-footer-mobile","dark"===o&&"dark"),style:d}):null]})}let ei=`
/* ============================================================================
 * Overlay-specific tokens only.
 * Everything else (--ord-background / -foreground / -muted / -border / -card /
 * -primary / -success / -warning / -destructive / -radius / -font-*)
 * is provided by @open-resource-discovery/ui-components' ThemeRoot and is
 * automatically swapped between light and dark themes by useTheme().
 * ============================================================================ */
@layer base {
    :where(.overlay-card-view) {
        --overlay-sidebar-footer-height: 35px;
        height: 100%;
        min-height: 0;
    }
}

.overlay-root {
    /* accent — Scalar's display-p3 blue, used for active sidebar items + hits */
    --overlay-accent: #0099ff;
    --overlay-accent-bg: color-mix(in oklab, var(--overlay-accent) 12%, transparent);

    /* verb colors for action / method indicators */
    --overlay-action-update: #c97a17;
    --overlay-action-merge: #0b9061;
    --overlay-action-remove: #dc2626;
    --overlay-action-default: #0a6ed1;

    /* layout */
    --overlay-toolbar-height: 48px;
    --overlay-sidebar-width: 280px;

    color: var(--ord-foreground);
    background: var(--ord-background);
    height: 100%;
    min-height: 0;

    /* container queries target this element via @container overlay-root (...) */
    container-type: inline-size;
    container-name: overlay-root;
}

#overview, #target, [id^="patch-"] {
    scroll-margin-top: calc(var(--overlay-toolbar-height) + 16px);
}

/* ============================================================================
 * Shell — Scalar's grid: sidebar + main. Container queries on .overlay-root
 * drive the breakpoints (so layout responds to renderer width, not viewport).
 * ============================================================================ */
.overlay-shell {
    display: grid;
    grid-template-areas:
        "toolbar"
        "sidebar"
        "content";
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    min-height: 100%;
    background: var(--ord-background);
}

/* ============================================================================
 * Sidebar — search / navigation / footer
 * ============================================================================ */
.overlay-sidebar {
    grid-area: sidebar;
    background: var(--ord-background);
    border-right: 1px solid var(--ord-border);
}
.overlay-sidebar-inner {
    position: static;
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: visible;
}
.overlay-sidebar-header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--ord-border);
    flex-shrink: 0;
}
.overlay-sidebar-search {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
}
.overlay-sidebar-search-icon {
    position: absolute;
    left: 10px;
    color: var(--ord-muted-foreground);
    pointer-events: none;
}
.overlay-sidebar-search-input {
    padding-left: 26px;
    padding-right: 56px;
    height: 31px;
    font-size: 13px;
    border-radius: 6px;
    width: 100%;
}
.overlay-sidebar-kbd {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    font-size: 10px;
    text-transform: uppercase;
    line-height: 1;
    color: var(--ord-muted-foreground);
    background: var(--ord-muted);
    border-radius: 4px;
    padding: 4px 5px;
    pointer-events: none;
}
.overlay-sidebar-nav {
    flex: none;
    overflow-y: visible;
    padding: 6px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.overlay-sidebar-footer {
    flex-shrink: 0;
    border-top: 1px solid var(--ord-border);
    background: var(--ord-background);
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: var(--ord-muted-foreground);
}
.overlay-sidebar-footer-mobile {
    position: fixed;
    bottom: 0;
    z-index: 20;
    display: flex;
    height: var(--overlay-sidebar-footer-height);
    box-sizing: border-box;
}
.overlay-sidebar-footer a {
    color: var(--ord-muted-foreground);
    text-decoration: none;
}
.overlay-sidebar-footer a:hover {
    color: var(--ord-foreground);
}
.overlay-sidebar-footer-spacer { flex: 1; }

.overlay-sidebar-group { display: flex; flex-direction: column; gap: 2px; }
.overlay-sidebar-group + .overlay-sidebar-group {
    border-top: 1px solid var(--ord-border);
    margin-top: 8px;
    padding-top: 8px;
}
.overlay-sidebar-group-title {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    color: var(--ord-muted-foreground);
    padding: 6px 8px 4px;
    margin: 0;
}
.overlay-sidebar-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1px; }
.overlay-sidebar-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 14px;
    color: var(--ord-muted-foreground);
    text-decoration: none;
    font-weight: 400;
    line-height: 1.385;
}
.overlay-sidebar-item:hover { background: var(--ord-muted); color: var(--ord-foreground); }
.overlay-sidebar-item-active {
    color: var(--overlay-accent);
    font-weight: 500;
    background: var(--overlay-accent-bg);
}
.overlay-sidebar-item-active .overlay-sidebar-item-label {
    color: var(--overlay-accent);
}
.overlay-sidebar-item-label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    font-size: 13px;
}
.overlay-sidebar-method {
    font-size: 10px;
    font-weight: 600;
    flex-shrink: 0;
    text-transform: uppercase;
    min-width: 50px;
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    text-align: right;
}
.overlay-sidebar-method-default { color: var(--overlay-action-default); }
.overlay-sidebar-method-success { color: var(--overlay-action-merge); }
.overlay-sidebar-method-destructive { color: var(--overlay-action-remove); }
.overlay-sidebar-hit {
    background: var(--overlay-accent-bg);
    color: inherit;
    padding: 0;
    border-radius: 2px;
}
.overlay-sidebar-empty {
    padding: 16px 12px;
    font-size: 12px;
    color: var(--ord-muted-foreground);
    text-align: center;
}

/* ============================================================================
 * Main column
 * ============================================================================ */
.overlay-toolbar {
    grid-area: toolbar;
    position: sticky;
    top: 0;
    z-index: 10;
    height: var(--overlay-toolbar-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid var(--ord-border);
    background: var(--ord-background);
    gap: 8px;
}
.overlay-toolbar-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }
.overlay-toolbar-section {
    font-size: 13px;
    font-weight: 500;
    color: var(--ord-foreground);
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    transition: opacity 120ms ease;
}
.overlay-toolbar-actions { display: flex; align-items: center; gap: 4px; }
.overlay-toolbar-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 28px;
    padding: 0 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--ord-foreground);
    text-decoration: none;
}
.overlay-toolbar-link:hover { background: var(--ord-muted); }

.overlay-main-content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding-bottom: 0;
}

@container overlay-root (min-width: 720px) {
    .overlay-shell {
        height: 100%;
        min-height: 0;
        grid-template-areas:
            "sidebar toolbar"
            "sidebar content";
        grid-template-columns: var(--overlay-sidebar-width) minmax(0, 1fr);
        grid-template-rows: var(--overlay-toolbar-height) minmax(0, 1fr);
    }
    .overlay-sidebar {
        min-height: 0;
    }
    .overlay-sidebar-inner {
        position: sticky;
        top: 0;
        height: 100%;
        overflow: hidden;
    }
    .overlay-sidebar-nav {
        flex: 1;
        overflow-y: auto;
    }
    .overlay-main-content {
        min-height: 0;
        overflow-y: auto;
    }
}

/* Each top-level block (hero / target / patches) is wrapped in this section. */
.overlay-section {
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* ============================================================================
 * Hero — two-column (left description / right sticky cards)
 * ============================================================================ */
.overlay-hero { gap: 48px; }
.overlay-hero-badges { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.overlay-hero-title {
    font-size: 24px;
    line-height: 1.45;
    font-weight: 600;
    margin: 12px 0 0;
    color: var(--ord-foreground);
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    word-break: break-word;
}
.overlay-hero-eyebrow {
    color: var(--ord-muted-foreground);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    margin: 0;
}
.overlay-hero-columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
}
.overlay-hero-description {
    font-size: 16px;
    line-height: 1.625;
    color: var(--ord-foreground);
}
.overlay-hero-description :where(p) { margin: 0 0 12px 0; }
.overlay-hero-description :where(p:last-child) { margin-bottom: 0; }
.overlay-hero-description :where(a),
.overlay-patch-body :where(a) {
    color: var(--ord-foreground);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
}
.overlay-hero-description :where(a):hover,
.overlay-patch-body :where(a):hover {
    color: var(--overlay-accent);
}

.overlay-hero-side {
    display: flex;
    flex-direction: column;
}
.overlay-hero-side > * + * {
    border-top: 0;
    margin-top: -1px; /* fuse cards like Scalar's introduction-card */
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.overlay-hero-side > *:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

@media (min-width: 1000px) {
    /* fallback for browsers without container query support */
}

/* ============================================================================
 * Target card (Scalar info-card style)
 * ============================================================================ */
.overlay-target-card {
    background: var(--ord-card);
    border: 1px solid var(--ord-border);
    border-radius: var(--ord-radius);
}
.overlay-target-rows { display: flex; flex-direction: column; gap: 8px; }
.overlay-target-row {
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: baseline;
    gap: 12px;
}
.overlay-target-label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    color: var(--ord-muted-foreground);
}
.overlay-target-value { min-width: 0; word-break: break-word; font-size: 14px; }

/* ============================================================================
 * Section header (Patches title row)
 * ============================================================================ */
.overlay-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}
.overlay-section-header-left { display: flex; align-items: center; gap: 8px; }
.overlay-section-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
}

/* ============================================================================
 * Patches summary card (Scalar endpoints-card preview)
 * ============================================================================ */
.overlay-patch-summary {
    border: 1px solid var(--ord-border);
    border-radius: var(--ord-radius);
    background: var(--ord-background);
    overflow: hidden;
}
.overlay-patch-summary-header {
    padding: 10px 14px;
    background: var(--ord-muted);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--ord-muted-foreground);
    border-bottom: 1px solid var(--ord-border);
}
.overlay-patch-summary ul { list-style: none; padding: 0; margin: 0; }
.overlay-patch-summary li + li { border-top: 1px solid var(--ord-border); }
.overlay-patch-summary a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 14px;
    text-decoration: none;
    color: var(--ord-foreground);
}
.overlay-patch-summary a:hover { background: var(--ord-muted); }

/* ============================================================================
 * Patches list — Scalar operations
 * ============================================================================ */
.overlay-patch-list { display: flex; flex-direction: column; gap: 12px; }
.overlay-patch-anchor {
    scroll-margin-top: calc(var(--overlay-toolbar-height) + 16px);
}
.overlay-patch { background: var(--ord-background); }
.overlay-patch-trigger { display: flex; width: 100%; }
.overlay-patch-label { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; text-align: left; }
.overlay-patch-body {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    padding: 16px;
}
.overlay-patch-col { display: flex; flex-direction: column; gap: 16px; min-width: 0; }

.overlay-field { display: flex; flex-direction: column; gap: 6px; }
.overlay-field-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.overlay-field-label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    color: var(--ord-muted-foreground);
    margin: 0;
}

.overlay-callout {
    padding: 12px 14px;
    border: 1px solid var(--ord-border);
    border-radius: var(--ord-radius);
    font-size: 13px;
    color: var(--ord-muted-foreground);
    background: var(--ord-card);
}
.overlay-callout-destructive {
    border-left: 4px solid var(--ord-destructive);
    background: rgba(220, 38, 38, 0.06);
    color: var(--ord-foreground);
}

.overlay-selector { font-size: 13px; }
.overlay-selector-value { font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace); }

.overlay-fatal {
    padding: 32px;
    color: var(--ord-foreground);
    font-family: var(--ord-font-sans, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif);
}
.overlay-fatal h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 600; }
.overlay-fatal p { margin: 0; color: var(--ord-muted-foreground); }

/* ============================================================================
 * Focus ring (keyboard-only)
 * ============================================================================ */
.overlay-root :focus { outline: none; }
body.navigation-with-keyboard .overlay-root :focus-visible {
    outline: 1px solid var(--overlay-accent);
    outline-offset: -2px;
    border-radius: inherit;
}

/* ============================================================================
 * Mobile — drawer instead of display:none
 * ============================================================================ */
/* Hero two-column at wide container */
@container overlay-root (min-width: 900px) {
    .overlay-hero-columns {
        grid-template-columns: minmax(0, 1fr) 320px;
    }
    .overlay-hero-side {
        position: sticky;
        top: calc(var(--overlay-toolbar-height) + 16px);
        align-self: start;
    }
}

@container overlay-root (min-width: 1000px) {
    .overlay-patch-body {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }
}

/* Narrow container — tighten section padding so content doesn't crowd edges. */
@container overlay-root (width < 720px) {
    .overlay-section { padding: 32px 16px; }
    .overlay-sidebar-footer-desktop { display: none; }
    .overlay-main-content {
        padding-bottom: var(--overlay-sidebar-footer-height);
    }
}
`,es=!1;function el(){if("u"<typeof document||es)return;es=!0;let e=document.createElement("style");e.dataset.overlayEditor="overlay-card-view",e.textContent=ei,document.head.appendChild(e)}function ec({content:e,className:t}){return(0,n.useEffect)(el,[]),(0,n.useEffect)(()=>{void 0!==e&&u.getState().setRawJson(e)},[e]),(0,a.jsx)("div",{className:(0,i.cn)("overlay-card-view",t),children:(0,a.jsx)(eo,{})})}var ed=r(90334);function ep({overlays:e,selectedId:t,onSelect:r}){let[o,s]=(0,n.useState)(""),l=(0,n.useMemo)(()=>{let t=o.trim().toLowerCase();return t?e.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.targetType.toLowerCase().includes(t)):e},[e,o]);return(0,a.jsxs)("div",{className:"flex h-full min-h-0 flex-col",children:[(0,a.jsx)("div",{className:"shrink-0 border-b border-border p-3",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(D.A,{className:"pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)(i.pd,{value:o,onChange:e=>s(e.target.value),placeholder:"Search examples…",className:"pl-8"})]})}),(0,a.jsx)("div",{className:"flex-1 overflow-y-auto p-2",children:0===l.length?(0,a.jsxs)("p",{className:"px-2 py-4 text-center text-xs text-muted-foreground",children:["No examples match “",o,"”."]}):(0,a.jsx)("ul",{className:"flex flex-col gap-2",children:l.map(e=>{var n;return(0,a.jsx)("li",{children:(0,a.jsxs)(i.Zp,{role:"button",tabIndex:0,onClick:()=>r(e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),r(e))},className:(0,i.cn)("cursor-pointer transition-colors hover:border-primary/40 hover:bg-accent/30",t===e.id&&"border-primary/60 bg-accent/40"),children:[(0,a.jsx)(i.Zp.Header,{className:"p-3",children:(0,a.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,a.jsx)(i.Zp.Title,{className:"text-sm leading-tight",children:e.title}),(0,a.jsx)(i.Ex,{variant:"secondary",className:"shrink-0 text-[10px] uppercase",children:(n=e.targetType).startsWith("openapi")?"OpenAPI":n.startsWith("csn")?"CSN":n.startsWith("edmx")?"EDMX":n.startsWith("mcp")?"MCP":n.startsWith("a2a")?"A2A":n})]})}),(0,a.jsx)(i.Zp.Content,{className:"px-3 pb-3 pt-0",children:(0,a.jsx)("p",{className:"line-clamp-2 text-xs text-muted-foreground",children:e.description})})]})},e.id)})})})]})}var em=r(92571);let ey="example";function eh(){let e=(0,o.useRouter)(),t=(0,o.useSearchParams)(),r=t.get(ey),[s,l]=(0,n.useState)([]),[c,d]=(0,n.useState)(""),[m,y]=(0,n.useState)(!0),[h,u]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=!0;return(0,ed.W)().then(t=>{e&&l(t)}).catch(t=>{e&&(u(String(t)),y(!1))}),()=>{e=!1}},[]);let v=(0,n.useMemo)(()=>0===s.length?null:r&&s.find(e=>e.id===r)||s[0],[s,r]),f=v?.url??null;(0,n.useEffect)(()=>{if(!f)return;let e=!0;return queueMicrotask(()=>{e&&(y(!0),u(null))}),(0,ed.l)(f).then(t=>{e&&(d(t),y(!1))}).catch(t=>{e&&(u(String(t)),y(!1))}),()=>{e=!1}},[f]);let g=(0,n.useCallback)(r=>{let a=new URLSearchParams(t.toString());a.set(ey,r.id),e.replace(`?${a.toString()}`,{scroll:!1})},[e,t]);return(0,a.jsxs)(i.vh.Root,{orientation:"horizontal",autoSaveId:"overlay-view-playground",className:"flex h-full min-h-0 flex-1",children:[(0,a.jsx)(i.vh.Panel,{defaultSize:"22%",minSize:"16%",maxSize:"40%",children:(0,a.jsx)(ep,{overlays:s,selectedId:v?.id??null,onSelect:g})}),(0,a.jsx)(i.vh.Handle,{}),(0,a.jsx)(i.vh.Panel,{defaultSize:"38%",minSize:"20%",children:(0,a.jsx)(p,{value:c,onChange:e=>d(e??""),language:"json",height:"100%"})}),(0,a.jsx)(i.vh.Handle,{}),(0,a.jsx)(i.vh.Panel,{defaultSize:"40%",minSize:"20%",children:(0,a.jsx)("div",{className:"relative h-full min-h-0 overflow-auto",children:m?(0,a.jsx)("div",{className:"grid h-full place-items-center text-sm text-muted-foreground",children:(0,a.jsxs)("span",{className:"inline-flex items-center gap-2",children:[(0,a.jsx)(em.A,{className:"h-4 w-4 animate-spin"}),"Loading overlay…"]})}):h?(0,a.jsx)("div",{className:"grid h-full place-items-center p-6 text-center",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-destructive",children:"Failed to load overlay."}),(0,a.jsx)("p",{className:"mt-1 text-xs text-muted-foreground",children:h}),(0,a.jsx)(i.$n,{variant:"outline",size:"sm",className:"mt-4",onClick:()=>e.refresh(),children:"Retry"})]})}):(0,a.jsx)(ec,{content:c})})})]})}},90334:(e,t,r)=>{function a(e){return e.startsWith("/")?`/pr-preview/overlay-editor/pr-16${e}`:e}r.d(t,{W:()=>i,l:()=>s});let n=a("/predefined-overlays.json"),o=null;function i(){return o||(o=fetch(n).then(e=>{if(!e.ok)throw Error(`failed to fetch ${n}: ${e.status}`);return e.json()}).catch(e=>{throw o=null,e})),o}async function s(e){let t=a(e),r=await fetch(t);if(!r.ok)throw Error(`failed to fetch ${t}: ${r.status}`);return r.text()}}}]);