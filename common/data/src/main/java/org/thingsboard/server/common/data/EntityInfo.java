/**
 * Copyright © 2016-2020 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.thingsboard.server.common.data;

import lombok.Data;
import org.thingsboard.server.common.data.id.EntityId;
import org.thingsboard.server.common.data.id.EntityIdFactory;
import org.thingsboard.server.common.data.id.HasId;

import java.util.UUID;

@Data
public class EntityInfo implements HasId<EntityId>, HasName {

    private final EntityId id;
    private final String name;

    public EntityInfo(EntityId id, String name) {
        this.id = id;
        this.name = name;
    }

    public EntityInfo(UUID uuid, String type, String name) {
        this.id = EntityIdFactory.getByTypeAndUuid(type, uuid);
        this.name = name;
    }

}