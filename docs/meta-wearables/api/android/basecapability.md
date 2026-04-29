<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability | scraped: 2026-04-28 -->

# BaseCapability Class

Implements [Capability](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability)

_Modifiers: abstract_

Base class for capabilities that are attached to a [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session).

Provides common lifecycle management: stopping, invalidation, and automatic detachment from the parent session's capability registry. Subclasses implement [BaseCapability.onClose](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability#onclose) for capability-specific cleanup (e.g., releasing camera resources, stopping encoding).

## See Also

-   [Capability](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability)
-   [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session)

## Signature

abstract class BaseCapability(parentSession: Session) : Capability

## Constructors

**BaseCapability** ( parentSession )

Signature

constructor(parentSession: Session)

Parameters

`parentSession: [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session)`  The session this capability is attached to

Returns

`[BaseCapability](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability)`

## Methods

**close** ()

Delegates to [BaseCapability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability#stop) for [Closeable](/docs/reference/android/dat/0.6/java_io_closeable) compatibility.

* * *

Signature

open override fun close()

**stop** ()

Stops this capability: performs cleanup via [BaseCapability.onClose](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability#onclose), then detaches from the parent session.

Idempotent: calling [BaseCapability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability#stop) on an already-stopped capability is a no-op.

* * *

Signature

open override fun stop()