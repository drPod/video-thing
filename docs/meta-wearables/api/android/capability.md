<!-- source: https://wearables.developer.meta.com/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability | scraped: 2026-04-28 -->

# Capability Interface

Extends Closeable

Contract for all capabilities that can be attached to a [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session).

Capabilities represent session-scoped features like camera streaming or photo capture. They are created via session methods (e.g., Session.addStream) and can be stopped individually via [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop) or automatically when the parent session stops (cascading stop).

Capabilities implement [Closeable](/docs/reference/android/dat/0.6/java_io_closeable) for resource management compatibility. The [Capability.close](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#close) method delegates to [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop).

## See Also

-   [Session](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_session)
-   [BaseCapability](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_basecapability)

## Signature

interface Capability : Closeable

## Methods

**close** ()

Signature

abstract override fun close()

**stop** ()

Stops this capability, releasing its resources and removing it from the parent session.

After calling [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop), the capability is invalidated and cannot be reused. The parent session's capability slot is released, allowing a new capability of the same type to be added.

Calling [Capability.stop](/docs/reference/android/dat/0.6/com_meta_wearable_dat_core_session_capability#stop) on an already-stopped capability is a no-op.

* * *

Signature

abstract fun stop()